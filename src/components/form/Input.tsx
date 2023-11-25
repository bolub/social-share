import React, { ComponentPropsWithoutRef } from "react";
import { css, cx } from "../../../styled-system/css";

type InputProps = {} & ComponentPropsWithoutRef<"input">;

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={cx(
        css({
          fontSize: "15px",
          border: "1px solid",
          borderColor: "gray.300",
          borderRadius: "md",
          height: "36px",
          py: "4",
          px: "2",
          _focusVisible: {
            outline: "none",
            ring: "1px solid",
            ringColor: "blue.500",
          },
        }),
        className
      )}
      {...props}
    />
  );
};
