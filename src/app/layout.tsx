import "../styles/globals.css";
import { cn } from "../lib/utils";
import { jetMono, plusJakartaSans } from "@/styles/font";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Geist } from "next/font/google";
import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/theme-provider";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Sparrow",
  description: "Sparrow web application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        jetMono.variable,
        plusJakartaSans.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider>
            <Toaster />
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
