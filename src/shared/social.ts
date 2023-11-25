import React from "react";
import { token } from "../../styled-system/tokens";
import { ImLinkedin, ImPinterest, ImTwitter, ImWhatsapp } from "react-icons/im";

export type Social = "twitter" | "linkedin" | "whatsapp" | "pinterest";

export const socialColors: Record<
  Social,
  { light: string; main: string; icon: any }
> = {
  twitter: {
    light: token("colors.gray.100"),
    main: "#14171a",
    icon: React.createElement(ImTwitter),
  },
  linkedin: {
    light: token("colors.sky.100"),
    main: "#0a66c2",
    icon: React.createElement(ImLinkedin),
  },
  whatsapp: {
    light: token("colors.green.100"),
    main: "#075e54",
    icon: React.createElement(ImWhatsapp),
  },
  pinterest: {
    light: token("colors.red.100"),
    main: "#bd081c",
    icon: React.createElement(ImPinterest),
  },
};
