import React, { ComponentPropsWithoutRef } from "react";
import { css, cx } from "../../../styled-system/css";

type TextareaProps = {} & ComponentPropsWithoutRef<"textarea">;

export const Textarea = ({ className, ...props }: TextareaProps) => {
  return (
    <textarea
      className={cx(
        css({
          fontSize: "15px",
          border: "1px solid",
          borderColor: "gray.300",
          borderRadius: "md",
          py: "2",
          px: "2",
          minH: "40px",
          _focusVisible: {
            outline: "none",
            ring: "1px solid",
            ringColor: "blue.500",
          },
        }),
        className
      )}
      {...props}
    ></textarea>
  );
};
