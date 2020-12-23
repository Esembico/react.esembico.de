import React from "react";
import { Link } from "react-router-dom";
import { isExternal } from "../helpers/url";

export default function ExternalInternalLink({ url, children }) {
  const internal = !isExternal(url);
  return (
    <React.Fragment>
      {internal && (
        <Link to={url}>
          {children}
        </Link>
      )}
      {!internal && (
        <a href={url} target="_blank" rel="noreferrer">
          {children}
        </a>
      )}
    </React.Fragment>
  );
}
