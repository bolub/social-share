import { css } from "../../../../styled-system/css";
import { Social, socialColors } from "@/shared/social";
import { flex } from "../../../../styled-system/patterns";
import { useCopy } from "@/hooks/useCopy";
import { SocialLinkContainer } from "./SocialLinkContainer";

type SocialLinkProps = {
  name: string;
  link: string;
  type: Social;
};

export const SocialLink = (props: SocialLinkProps) => {
  const { main, icon } = socialColors[props.type];

  const { copied, onCopy } = useCopy();

  return (
    <SocialLinkContainer type={props.type} name={props.name}>
      <p
        style={{
          color: main,
        }}
        className={flex({
          fontWeight: "bold",
          gap: "8px",
          alignItems: "center",
        })}
      >
        {icon}

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
        onClick={() => {
          onCopy({ text: props.link });
        }}
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
    </SocialLinkContainer>
  );
};
