import { Social, socialColors } from "@/shared/social";
import { useParams } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";
import { css } from "../../../../styled-system/css";

export const SocialLinkContainer = ({
  type,
  name,
  children,
}: {
  type: Social;
  name: string;
  children: ReactNode;
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const { light, main } = socialColors[type];

  const params = useParams();

  useEffect(() => {
    if (window.location.hash.toLowerCase() === `#${name.toLowerCase()}`) {
      setIsFocused(true);
    } else {
      setIsFocused(false);
    }

    setTimeout(() => {
      setIsFocused(false);
    }, 3000);
  }, [params, name]);

  return (
    <div
      id={type}
      style={{
        backgroundColor: light,
        outlineColor: main,
      }}
      className={css({
        rounded: "16px",
        px: "20px",
        py: "16px",
        w: "full",
        ring: isFocused ? "1px solid" : "",
        ringOffset: isFocused ? "4px" : "",
      })}
    >
      {children}
    </div>
  );
};
