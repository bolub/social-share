import React, { useState } from "react";

export const useCopy = () => {
  const [copied, setCopied] = useState(false);

  const onCopy = ({ text }: { text: string }) => {
    navigator.clipboard.writeText(text);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return {
    copied,
    onCopy,
  };
};
