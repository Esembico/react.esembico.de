import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import CodeHighligher from "./CodeHighligher";
import Loadable from "../components/Loadable";
import useApi from "../hooks/useApi";

const renderers = {
  code: ({ language, value }) => {
    return <CodeHighligher language={language}>{value}</CodeHighligher>;
  },
  image: (params) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img className="responsive-image" {...params}></img>;
  },
};

export default function GenericPage({ theme }) {
  const { name } = useParams();
  const { status, data: pageContent = "", error } = useApi(
    `http://api.esembico.de/pages/slug/${name}/`,
    "content"
  );

  useEffect(() => {
    document.querySelector("body").className = theme || "home";
  }, [theme]);
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

      <Loadable entityName={name} loading={status === "loading"} error={error}>
        <div className="row">
          <div className="main-main" style={{ backgroundColor: "#000000" }}>
            <ReactMarkdown renderers={renderers}>{pageContent}</ReactMarkdown>
          </div>
        </div>
      </Loadable>
    </React.Fragment>
  );
}
