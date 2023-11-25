import { hstack } from "../../../../styled-system/patterns";
import { css } from "../../../../styled-system/css";
import { socialColors } from "@/shared/social";
import Link from "next/link";

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
        <Link
          href="#twitter"
          style={{
            color: socialColors["twitter"].main,
          }}
        >
          {socialColors["twitter"].icon}
        </Link>
      )}

      {props.linkedIn && (
        <Link
          href="#linkedin"
          style={{
            color: socialColors["linkedin"].main,
          }}
        >
          {socialColors["linkedin"].icon}
        </Link>
      )}

      {props.whatsapp && (
        <Link
          href="#whatsapp"
          style={{
            color: socialColors["whatsapp"].main,
          }}
        >
          {socialColors["whatsapp"].icon}
        </Link>
      )}

      {props.pinterest && (
        <Link
          href="#pinterest"
          style={{
            color: socialColors["pinterest"].main,
          }}
        >
          {socialColors["pinterest"].icon}
        </Link>
      )}
    </div>
  );
};
