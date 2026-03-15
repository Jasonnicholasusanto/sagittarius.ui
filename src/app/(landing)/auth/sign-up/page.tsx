import { SignUpForm } from "@/app/(landing)/auth/sign-up/signup-form";
import Link from "next/link";
import Image from "next/image";
import { CopyrightFooter } from "@/components/copyright-footer";
import { PageMotion } from "@/components/layout/motion-wrapper";

export default function SignUpPage() {
  return (
    <PageMotion>
      <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
        <div className="flex w-full max-w-sm flex-col gap-5">
          <Link href="/" className="flex items-center gap-3 self-center mb-3">
            <Image
              src="/images/sparrow-logo-white.png"
              alt="Sparrow Logo White"
              width={50}
              height={50}
              priority
            />
            <p className="text-4xl font-extrabold">Sparrow</p>
          </Link>
          <SignUpForm />
          <CopyrightFooter />
        </div>
      </div>
    </PageMotion>
  );
}
