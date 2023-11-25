import React from "react";
import { hstack } from "../../../../styled-system/patterns";
import { css } from "../../../../styled-system/css";
import { ImLinkedin, ImPinterest, ImTwitter, ImWhatsapp } from "react-icons/im";

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

      {props.twitter && <ImTwitter />}

      {props.linkedIn && <ImLinkedin />}

      {props.whatsapp && <ImWhatsapp />}

      {props.pinterest && <ImPinterest />}
    </div>
  );
};
