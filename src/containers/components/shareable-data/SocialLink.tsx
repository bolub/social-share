import { useState } from "react";
import { css } from "../../../../styled-system/css";
import { Social, socialColors } from "@/shared/Social";

type SocialLinkProps = {
  name: string;
  link: string;
  type: Social;
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
