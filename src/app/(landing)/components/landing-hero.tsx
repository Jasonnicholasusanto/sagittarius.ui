import SplitText from "@/components/split-text";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HERO_MESSAGES = [
  "Welcome to Sparrow",
  "Discover your next opportunity",
  "Move with clarity",
  "Build your portfolio with confidence",
];

export default function LandingHero() {
  const [messageIndex, setMessageIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleAnimationComplete = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setMessageIndex((prev) => (prev + 1) % HERO_MESSAGES.length);
    }, 1400);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col">
      <section className="flex flex-1 items-center justify-center px-6 pt-24 pb-16">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <div className="min-h-35 sm:min-h-35 flex items-center justify-center">
            <SplitText
              key={messageIndex}
              text={HERO_MESSAGES[messageIndex]}
              className="text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl text-white"
              delay={100}
              duration={1.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </div>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            Sparrow helps teams and individuals explore information, surface
            insights, and make decisions with a cleaner, calmer, more focused
            experience.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="min-w-40 rounded-full px-8">
              <Link href="/auth/sign-up">Join now</Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="ghost"
              className="min-w-40 rounded-full px-8 text-white"
            >
              <Link href="#about">Learn more</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
