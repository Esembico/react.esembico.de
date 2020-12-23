import React from "react";
import LoadingError from "./error/LoadingError";
import LoadingIndicator from "./LoadingIndicator";

export default function Loadable({ error, loading, reloadCallback, children, entityName }) {
  return (
    <React.Fragment>
      {error && <LoadingError entityName={entityName} reloadCallback={reloadCallback} />}
      <LoadingIndicator show={loading} />
      {!error && !loading && children}
    </React.Fragment>
  );
}
