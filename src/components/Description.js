import React from "react";

export default function Description({ children, useBr }) {
  return (
    <React.Fragment>
      {useBr && (
        <span
          dangerouslySetInnerHTML={{
            __html: children.split("\r\n").join("<br>"),
          }}
        />
      )}
      {!useBr && (
        <React.Fragment>
          {children.split("\r\n").map((line, index) => {
            return <p key={index}>{line}</p>;
          })}
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
