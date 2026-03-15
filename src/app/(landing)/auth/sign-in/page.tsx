import { CopyrightFooter } from "@/components/copyright-footer";
import Link from "next/link";
import Image from "next/image";
import { LoginForm } from "./signin-form";

export default function LoginPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 self-center text-2xl font-extrabold"
        >
          <Image
            src="/images/sparrow-logo-white.png"
            alt="Sparrow Logo White"
            width={100}
            height={100}
            priority
          />
        </Link>
        <LoginForm />
        <CopyrightFooter />
      </div>
    </div>
  );
}
