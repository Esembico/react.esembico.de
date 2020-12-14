import React, { useEffect, useState } from "react";
import { highlight } from "../highlighter";

export default function CodeHighligher({ children, language }) {
  const [newCode, setNewCode] = useState(children);
  useEffect(() => {
    setNewCode(highlight(children, language));
  }, [children, language]);
  return <pre dangerouslySetInnerHTML={{__html: newCode}}></pre>;
}
