"use client";

import * as React from "react";
import type { ReactNode } from "react";

import Header from "@/components/layout/platform/header";
import Onboarding, { type OnboardingFormValues } from "./components/onboarding";
import { useUser } from "@/providers/user-provider";
import { toast } from "sonner";
import { createProfile, getUserProfile } from "@/lib/data/me";
import FadeContent from "@/components/fade-content";
import { SidebarPanel } from "@/components/layout/platform/sidebar-panel";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

type Props = {
  children: ReactNode;
};

const HEADER_OFFSET = 80;

export default function PlatformShell({ children }: Props) {
  const { user, setUser, authUser } = useUser();
  const [showOnboarding, setShowOnboarding] = React.useState(user === null);
  const [isSaving, setIsSaving] = React.useState(false);
  const authUserObj = authUser?.user_metadata;

  async function handleOnboardingSubmit(values: OnboardingFormValues) {
    try {
      setIsSaving(true);

      await toast.promise(
        (async () => {
          await createProfile({
            full_name: values.fullName,
            username: values.username,
            birth_date: values.dateOfBirth.toISOString().split("T")[0],
            phone_number: values.phoneNumber,
            email_address: authUserObj?.email || "",
          });

          const freshUser = await getUserProfile();
          setUser(freshUser);
          setShowOnboarding(false);
        })(),
        {
          loading: "Creating profile...",
          success: "Profile created successfully!",
          error: (err) => ({
            message: "Failed to create profile.",
            description: err?.message || "Please try again later.",
          }),
        },
      );
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <FadeContent blur={true} duration={3000} initialOpacity={0}>
      <div className="min-h-screen bg-background px-11 text-foreground">
        <Header />

        <Onboarding
          open={showOnboarding}
          isSubmitting={isSaving}
          onSubmit={handleOnboardingSubmit}
        />

        <div className="mt-6">
          <div className="hidden xl:block">
            <ResizablePanelGroup
              orientation="horizontal"
              className="min-h-0 w-full gap-0"
            >
              <ResizablePanel defaultSize="70%">
                <main className="pr-2">{children}</main>
              </ResizablePanel>

              <ResizableHandle />

              <ResizablePanel
                defaultSize="30%"
                className="top-0 sticky max-h-30"
              >
                <aside
                  className="sticky pl-2"
                  style={{
                    height: `calc(100vh - ${HEADER_OFFSET}px - 2.5rem)`,
                  }}
                >
                  <SidebarPanel />
                </aside>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </div>
        {/* <div className="mt-6">
          <div className="hidden xl:grid xl:grid-cols-[minmax(0,1fr)_360px] xl:gap-6">
            <main className="min-w-0">{children}</main>

            <aside
              className="sticky self-start top-26"
              style={{
                height: `calc(100vh - ${HEADER_OFFSET}px - 2.5rem)`,
              }}
            >
              <SidebarPanel />
            </aside>
          </div>
        </div> */}
      </div>
    </FadeContent>
  );
}
