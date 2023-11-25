import React from "react";
import { container } from "../../styled-system/patterns";
import { css } from "../../styled-system/css";

export const Navbar = () => {
  return (
    <nav
      className={css({
        py: "6px",
        height: "60px",
        display: "flex",
        alignItems: "center",
      })}
    >
      <div
        className={container({
          width: "full",
        })}
      >
        <span
          className={css({
            fontSize: { base: "lg", md: "xl" },
            fontWeight: "bold",
            bgGradient: "to-r",
            gradientFrom: "red.500",
            gradientTo: "blue.500",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          })}
        >
          SocialShare
        </span>
      </div>
    </nav>
  );
};
