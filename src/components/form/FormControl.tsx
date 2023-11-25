import React, { ReactNode } from "react";
import { flex } from "../../../styled-system/patterns";

export const FormControl = ({
  children,
  id,
}: {
  children: ReactNode;
  id: string;
}) => {
  return (
    <div
      id={id}
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
