import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between rounded-full border border-border/60 px-4 shadow-sm backdrop-blur-md">
          <Link
            href="/"
            className="flex items-center self-center text-lg font-extrabold gap-3 text-white"
          >
            <Image
              src="/images/sparrow-logo-white.png"
              alt="Sparrow Logo White"
              width={25}
              height={25}
              priority
            />
            Sparrow
          </Link>

          {/* <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="#about"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
          </nav> */}

          <div className="flex items-center gap-2">
            <Button
              asChild
              size="sm"
              variant="ghost"
              className="px-5 rounded-full text-white"
            >
              <Link href="/auth/sign-in">Sign in</Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="rounded-full px-5 bg-white text-black"
            >
              <Link href="/auth/sign-up">Sign up</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
