import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { highlight } from "../highlighter";

export default function CodeHighligher({ children, language }) {
  const [newCode, setNewCode] = useState(children);
  useEffect(() => {
    import(`../highlighter/languages/${language}`).then((lang) => {
      setNewCode(highlight(children, lang.default));
    });
  }, [children, language]);

  function copyCode() {
    navigator.clipboard.writeText(children);
  }
  return (
    <div style={{ position: "relative" }}>
      <pre dangerouslySetInnerHTML={{ __html: newCode }}></pre>
      <button title="Copy" className="float" onClick={copyCode}>
        <FontAwesomeIcon icon={faCopy} />
      </button>
    </div>
  );
}
