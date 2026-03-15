"use client";

const currentYear = new Date().getFullYear();

export function CopyrightFooter() {
  return (
    <p className="text-center text-sm text-muted-foreground">
      &copy; {currentYear} Sparrow. All rights reserved.
    </p>
  );
}
