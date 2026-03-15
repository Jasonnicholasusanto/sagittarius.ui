"use client";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { motion } from "motion/react";
import { loginGoogle } from "@/services/authActions";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

function SignUpGoogleButton() {
  async function handleGoogleLogin() {
    const res = await loginGoogle();
    if (res?.url) {
      window.location.href = res.url;
    } else if (res?.error) {
      console.error(res.error);
      alert("Google login failed: " + res.error);
    }
  }

  return (
    <Button variant="secondary" className="w-full" onClick={handleGoogleLogin}>
      <FaGoogle />
      Login with Google
    </Button>
  );
}

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    if (password !== repeatPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/platform`,
        },
      });
      if (error) throw error;
      setSuccess(true);
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div
        className={cn(
          "flex flex-col justify-center items-center gap-12",
          className,
        )}
        {...props}
      >
        {success ? (
          <Card
            className="relative overflow-hidden rounded-2xl
                border-0 bg-black/50 backdrop-blur-xl
                shadow-xl w-md"
          >
            <CardHeader className="text-center">
              <CardTitle className="text-xl flex flex-col items-center justify-center gap-5">
                <span>Thank you for signing up!</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-sm pb-5">
                We have sent a confirmation link to your email address. Please
                check your inbox and click the link to verify your account.
              </p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Link
                href="/auth/login"
                className="underline underline-offset-4 text-sm hover:text-primary"
              >
                Back to login
              </Link>
            </CardFooter>
          </Card>
        ) : (
          <Card
            className="relative overflow-hidden rounded-2xl
                border-0 bg-black/50 backdrop-blur-xl
                shadow-xl w-md"
          >
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Create your account</CardTitle>
              <CardDescription>
                Sign up with Google or continue with email
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSignUp}>
                <div className="grid gap-6">
                  <div className="flex flex-col gap-4">
                    <SignUpGoogleButton />
                  </div>

                  <div className="relative text-center text-sm flex items-center">
                    <div className="grow border-t border-muted-foreground"></div>
                    <span className="text-muted-foreground relative z-10 px-2">
                      Or continue with
                    </span>
                    <div className="grow border-t border-muted-foreground"></div>
                  </div>

                  <div className="grid gap-4">
                    <div className="grid gap-3">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="someone@example.com"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="grid gap-1">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="********"
                        autoComplete="new-password"
                        minLength={8}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <p className="text-muted-foreground text-xs">
                        Use at least 8 characters.
                      </p>
                    </div>

                    <div className="grid gap-3">
                      <Label htmlFor="confirmPassword">Confirm password</Label>
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        autoComplete="new-password"
                        placeholder="********"
                        required
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                      />
                    </div>
                  </div>

                  {error && <p className="text-sm text-red-500">{error}</p>}
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? (
                      <Spinner data-icon="inline-start" />
                    ) : (
                      "Create account"
                    )}
                  </Button>

                  <div className="text-center text-sm">
                    Already have an account?{" "}
                    <Link
                      href="/auth/login"
                      className="underline underline-offset-4"
                    >
                      Log in
                    </Link>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </motion.div>
  );
}
