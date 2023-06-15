import React, { useState } from "react";

export const useCopiedState = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true);
      })
      .catch(() => {
        setIsCopied(false);
      });

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return { isCopied, handleCopy };
};
