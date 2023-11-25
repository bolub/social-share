"use client";

import { steps } from "@/shared/tour";
import { TourProvider } from "@reactour/tour";
import { ReactNode } from "react";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <TourProvider
      steps={steps}
      padding={20}
      styles={{
        popover: (base) => ({
          ...base,
          "--reactour-accent": "#ef4444",
          borderRadius: 10,
          fontSize: 14,
        }),

        maskArea: (base) => ({ ...base, rx: 10 }),
        controls: (base) => ({ ...base, marginTop: 20 }),
        close: (base) => ({ display: "none" }),
      }}
    >
      {children}
    </TourProvider>
  );
};
