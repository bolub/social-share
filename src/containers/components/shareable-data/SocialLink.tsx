import { css, cx } from "../../../../styled-system/css";
import { Social, socialColors } from "@/shared/social";
import { flex, square } from "../../../../styled-system/patterns";
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className={square({ size: 3 })}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </button>
      </a>
    </SocialLinkContainer>
  );
};
