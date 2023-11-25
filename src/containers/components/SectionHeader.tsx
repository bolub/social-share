import React, { ReactNode } from "react";
import { css } from "../../../styled-system/css";

export const SectionHeader = ({ children }: { children: ReactNode }) => {
  return (
    <span
      className={css({
        textTransform: "uppercase",
        fontSize: "sm",
        fontWeight: "bold",
        display: "block",
      })}
    >
      {children}
    </span>
  );
};
