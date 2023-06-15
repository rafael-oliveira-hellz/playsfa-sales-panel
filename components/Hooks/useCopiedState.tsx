import React, { useState } from "react";

export const useCopiedState = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.permissions
      .query({
        name: "push",
      })
      .then((result) => {
        if (result.state === "granted") {
          alert("Permissão negada!");
        } else {
          navigator.clipboard
            .writeText(text)
            .then(() => {
              setIsCopied(true);
            })
            .catch((e) => {
              alert(`Ocorreu um erro! Tente novamente mais tarde. ${e}`);
              setIsCopied(false);
            });
        }
      });
    // // Será 'granted', 'denied' or 'prompt':
    // console.log(permissionStatus.state);

    // // Escuta mudanças ao estado de permissão
    // permissionStatus.onchange = () => {
    //   console.log(permissionStatus.state);
    // };
    // navigator.clipboard
    //   .writeText(text)
    //   .then(() => {
    //     setIsCopied(true);
    //   })
    //   .catch((e) => {
    //     alert(`Ocorreu um erro! Tente novamente mais tarde. ${e}`);
    //     setIsCopied(false);
    //   });

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return { isCopied, handleCopy };
};
