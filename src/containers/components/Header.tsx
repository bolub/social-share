"use client";

import { useTour } from "@reactour/tour";
import { css } from "../../../styled-system/css";
import { container } from "../../../styled-system/patterns";
import { DisappearingText } from "./DisappearingText";

export const Header = () => {
  const { setIsOpen } = useTour();

  return (
    <header className={container()}>
      <div
        className={css({
          display: "flex",
          flexDir: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          height: "50vh",
        })}
      >
        <h1
          className={css({
            fontSize: { base: "4xl", md: "5xl" },
            fontWeight: "bold",
            maxW: "650px",
            lineHeight: "tight",
          })}
        >
          Get Social shareable links for <DisappearingText />
        </h1>

        <button
          onClick={() => setIsOpen(true)}
          className={css({
            mt: { base: "32px", md: "42px" },
            cursor: "pointer",
            fontSize: "sm",
            color: "white",
            bgColor: "gray.900",
            rounded: "lg",
            px: "3",
            py: "2",
          })}
        >
          Take a tour
        </button>
      </div>
    </header>
  );
};
