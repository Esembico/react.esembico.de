import React, { useEffect, useState } from "react";
import { highlight } from "../highlighter";

export default function CodeHighligher({ children, language }) {
  const [newCode, setNewCode] = useState(children);
  useEffect(() => {
    import(`../highlighter/languages/${language}`).then((lang) => {
      setNewCode(highlight(children, lang.default));
    });
  }, [children, language]);
  return <pre dangerouslySetInnerHTML={{ __html: newCode }}></pre>;
}
