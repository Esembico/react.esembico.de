import React from "react";

export default function LoadingError({ reloadCallback, entityName }) {
  return (
    <div className="row">
      <div
        className="main-main"
        style={{ margin: "auto", textAlign: "center" }}
      >
        <p>Failed to load {entityName}</p>
      </div>
    </div>
  );
}
