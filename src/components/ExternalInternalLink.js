import React from "react";
import { Link } from "react-router-dom";

export default function ExternalInternalLink({ internal, url, children }) {
  return (
    <React.Fragment>
      {internal && (
        <Link exact={true} to={url}>
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
