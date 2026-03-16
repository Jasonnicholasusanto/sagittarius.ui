import { Spinner } from "@/components/ui/spinner";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-10 rounded-2xl">
        <div className="flex items-center gap-5">
          <Image
            src="/images/sparrow-logo-black.png"
            alt="Sparrow Logo"
            width={70}
            height={70}
            priority
            className="block dark:hidden"
          />
          <Image
            src="/images/sparrow-logo-white.png"
            alt="Sparrow Logo"
            width={70}
            height={70}
            priority
            className="hidden dark:block"
          />
          <p className="text-6xl font-extrabold">Sparrow</p>
        </div>

        <div className="flex items-center gap-3 text-muted-foreground">
          <Spinner className="h-6 w-6 animate-spin" />
          <span className="text-sm">Getting things ready...</span>
        </div>
      </div>
    </div>
  );
}
