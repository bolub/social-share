"use client";

import React, { useCallback, useEffect, useState } from "react";
import { css } from "../../../styled-system/css";

const data = ["Twitter", "Linkedin", "Whatsapp"];

export const DisappearingText = () => {
  const [activeTextIndex, setActiveTextIndex] = useState(0);

  const setNextIndex = useCallback(() => {
    const t = activeTextIndex;

    if (t + 1 >= data.length) {
      setActiveTextIndex(0);

      return;
    }

    setActiveTextIndex(t + 1);
  }, [activeTextIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setNextIndex();
    }, 1500);

    return () => clearInterval(interval);
  }, [setNextIndex]);

  return (
    <span
      className={css({
        transition: "all",
        fontWeight: "bold",
        bgGradient: "to-r",
        gradientFrom: "red.500",
        gradientTo: "blue.500",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
      })}
    >
      {data[activeTextIndex]}
    </span>
  );
};
