"use client";

const currentYear = new Date().getFullYear();

export function CopyrightFooter() {
  return (
    <p className="text-center text-sm text-zinc-400">
      &copy; {currentYear} Sparrow. All rights reserved.
    </p>
  );
}
