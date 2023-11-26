import { cva } from "../../styled-system/css";

export const button = cva({
  base: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    cursor: "pointer",
    color: "white",
    rounded: "lg",
  },
  variants: {
    visual: {
      base: { bgColor: "gray.900", color: "white" },
      plain: {},
    },
    size: {
      sm: { px: "3", py: "2", fontSize: "sm" },
      xs: { px: "3", py: "2", fontSize: "xs" },
    },
  },
  defaultVariants: {
    visual: "base",
    size: "sm",
  },
});
