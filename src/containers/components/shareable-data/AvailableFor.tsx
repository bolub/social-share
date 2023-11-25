import React from "react";
import { hstack } from "../../../../styled-system/patterns";
import { css } from "../../../../styled-system/css";
import { ImLinkedin, ImPinterest, ImTwitter, ImWhatsapp } from "react-icons/im";
import { socialColors } from "@/shared/social";

export const AvailableFor = (props: {
  twitter?: boolean;
  linkedIn?: boolean;
  whatsapp?: boolean;
  pinterest?: boolean;
}) => {
  return (
    <div
      className={hstack({
        mt: "2px",
        color: "gray.600",
        fontSize: "xs",
      })}
    >
      <span
        className={css({
          fontWeight: "medium",
        })}
      >
        Available for:
      </span>

      {props.twitter && (
        <div
          style={{
            color: socialColors["twitter"].main,
          }}
        >
          <ImTwitter />
        </div>
      )}

      {props.linkedIn && (
        <div
          style={{
            color: socialColors["linkedin"].main,
          }}
        >
          <ImLinkedin />
        </div>
      )}

      {props.whatsapp && (
        <div
          style={{
            color: socialColors["whatsapp"].main,
          }}
        >
          <ImWhatsapp />
        </div>
      )}

      {props.pinterest && (
        <div
          style={{
            color: socialColors["pinterest"].main,
          }}
        >
          <ImPinterest />
        </div>
      )}
    </div>
  );
};
