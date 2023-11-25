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
        <p
          className={css({
            fontSize: "sm",
            fontWeight: "bold",
            textTransform: "uppercase",
          })}
        >
          Social share
        </p>
      </div>
    </nav>
  );
};
