import React, { ReactNode } from "react";
import { flex } from "../../../styled-system/patterns";

export const FormControl = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={flex({
        direction: "column",
        width: "100%",
        gap: "4px",
      })}
    >
      {children}
    </div>
  );
};
