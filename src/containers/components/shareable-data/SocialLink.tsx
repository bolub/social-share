import { css, cx } from "../../../../styled-system/css";
import { Social, socialColors } from "@/shared/social";
import { flex } from "../../../../styled-system/patterns";
import { SocialLinkContainer } from "./SocialLinkContainer";
import { button } from "@/theme/button";

type SocialLinkProps = {
  name: string;
  link: string;
  type: Social;
};

export const SocialLink = (props: SocialLinkProps) => {
  const { main, icon } = socialColors[props.type];

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

      <a target="__blank" href={props.link}>
        <button
          style={{
            backgroundColor: main,
          }}
          className={cx(
            button({ visual: "plain", size: "xs" }),
            css({
              mt: "30px",
            })
          )}
        >
          Go to link
        </button>
      </a>
    </SocialLinkContainer>
  );
};
