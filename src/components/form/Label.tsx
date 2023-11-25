import React, {
  ComponentProps,
  ComponentPropsWithoutRef,
  ReactNode,
} from "react";
import { css, cx } from "../../../styled-system/css";
import { flex } from "../../../styled-system/patterns";

type LabelProps = { children: ReactNode } & ComponentPropsWithoutRef<"label">;

export const Label = ({ className, children, ...props }: LabelProps) => {
  return (
    <div
      className={flex({
        justifyContent: "space-between",
        alignItems: "center",
      })}
    >
      <label
        className={cx(
          css({
            fontSize: "sm",
            color: "gray.700",
            fontWeight: "semibold",
          }),
          className
        )}
        {...props}
      >
        {children}
      </label>

      {/* <span
        className={css({
          fontSize: "xs",
          color: "gray.500",
        })}
      >
        Not required
      </span> */}
    </div>
  );
};
