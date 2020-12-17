import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import CodeHighligher from "./CodeHighligher";

const renderers = {
  code: ({ language, value }) => {
    return <CodeHighligher language={language}>{value}</CodeHighligher>;
  },
  image: (params) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img className="responsive-image" {...params}></img>
  },
};

export default function GenericPage({ theme }) {
  const { name } = useParams();
  const [pageContent, setPageContent] = useState("");

  useEffect(() => {
    document.querySelector("body").className = theme || "home";
    fetch(`/data/pages/${name}.md`)
      .then((res) => res.text())
      .then((text) => {
        // FIXME: Find a better way to determine if a markdown file was loaded.
        if (text.startsWith("#")) {
          setPageContent(text);
        } else {
          setPageContent("");
        }
      });
  }, [theme, name]);
  return (
    <React.Fragment>
      <div className="row">
        <div className="image flex-item-50">
          <img
            className="responsive-image"
            src="/static/images/proto/1.webp"
            alt="proto_1"
          />
        </div>
        <div className="image flex-item-50">
          <img
            className="responsive-image"
            src="/static/images/proto/2.jpg"
            alt="proto_2"
          />
        </div>
      </div>

      <div className="row">
        <div className="main-main" style={{ backgroundColor: "#000000" }}>
          <ReactMarkdown renderers={renderers}>{pageContent}</ReactMarkdown>
        </div>
      </div>
    </React.Fragment>
  );
}
