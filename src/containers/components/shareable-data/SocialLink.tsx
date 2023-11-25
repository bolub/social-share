import { useState } from "react";
import { css } from "../../../../styled-system/css";
import { token } from "../../../../styled-system/tokens";

export type Social = "twitter" | "linkedin" | "whatsapp" | "pinterest";

type SocialLinkProps = {
  name: string;
  link: string;
  type: Social;
};

const socialColors: Record<Social, { light: string; main: string }> = {
  twitter: {
    light: token("colors.blue.100"),
    main: token("colors.blue.900"),
  },
  linkedin: {
    light: token("colors.sky.100"),
    main: token("colors.sky.900"),
  },
  whatsapp: {
    light: token("colors.green.100"),
    main: token("colors.green.900"),
  },
  pinterest: {
    light: token("colors.red.100"),
    main: token("colors.red.900"),
  },
};

export const SocialLink = (props: SocialLinkProps) => {
  const { light, main } = socialColors[props.type];

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(props.link);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div
      style={{
        backgroundColor: light,
      }}
      className={css({
        rounded: "16px",
        px: "20px",
        py: "16px",
        w: "full",
      })}
    >
      <p
        style={{
          color: main,
        }}
        className={css({
          fontWeight: "bold",
        })}
      >
        {props.name}
      </p>

      <a
        href={props.link}
        target="_blank"
        className={css({
          mt: "12px",
          fontSize: "sm",
          textDecoration: "underline",
          wordBreak: "break-all",
          display: "block",
        })}
      >
        {props.link}
      </a>

      <button
        style={{
          backgroundColor: main,
        }}
        onClick={handleCopy}
        className={css({
          mt: "30px",
          cursor: "pointer",
          fontSize: "xs",
          color: "white",
          rounded: "lg",
          px: "3",
          py: "2",
        })}
      >
        {!copied ? "Copy" : "Copied"}
      </button>
    </div>
  );
};
