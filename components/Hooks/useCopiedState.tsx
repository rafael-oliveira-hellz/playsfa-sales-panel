import React, { useState } from "react";

export const useCopiedState = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true);
      })
      .catch((e) => {
        alert(`Ocorreu um erro! Tente novamente mais tarde. ${e}`);
        setIsCopied(false);
      });

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return { isCopied, handleCopy };
};
