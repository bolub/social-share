import { token } from "../../styled-system/tokens";

export type Social = "twitter" | "linkedin" | "whatsapp" | "pinterest";

export const socialColors: Record<Social, { light: string; main: string }> = {
  twitter: {
    light: token("colors.gray.100"),
    main: "#14171a",
  },
  linkedin: {
    light: token("colors.sky.100"),
    main: "#0a66c2",
  },
  whatsapp: {
    light: token("colors.green.100"),
    main: "#075e54",
  },
  pinterest: {
    light: token("colors.red.100"),
    main: "#bd081c",
  },
};
