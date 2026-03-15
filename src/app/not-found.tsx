"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { PageMotion } from "@/components/layout/motion-wrapper";
import FaultyTerminal from "@/components/layout/faulty-terminal";

export default function NotFound() {
  const router = useRouter();

  return (
    <PageMotion>
      <div className="relative min-h-screen overflow-hidden bg-background">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <FaultyTerminal
            scale={1.5}
            gridMul={[2, 1]}
            digitSize={1.5}
            timeScale={0.8}
            pause={false}
            scanlineIntensity={0.5}
            glitchAmount={1}
            flickerAmount={1}
            noiseAmp={1}
            chromaticAberration={0}
            dither={0}
            curvature={0.1}
            tint="#1eff00"
            mouseReact
            mouseStrength={0.5}
            pageLoadAnimation
            brightness={0.6}
          />
        </div>

        <div className="relative z-10 flex min-h-screen items-center justify-center flex-col px-6">
          <div className="w-full max-w-xl rounded-2xl p-8 text-center">
            <div className="space-y-3">
              <p className="text-[160px] font-extrabold text-muted-foreground leading-none">
                404
              </p>

              <h1 className="text-3xl font-semibold tracking-tight">
                Page not found
              </h1>

              <p className="text-muted-foreground max-w-md mx-auto">
                The page you are looking for does not exist, or you may not have
                access.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button variant="secondary" onClick={() => router.back()}>
                Go back
              </Button>

              <Button asChild>
                <Link href="/platform">Go to dashboard</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageMotion>
  );
}
