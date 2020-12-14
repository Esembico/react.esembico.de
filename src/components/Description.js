import React from "react";

export default function Description({ children }) {
  return (
    <React.Fragment>
      {children.split("\n").map((line, index) => {
        return <p key={index}>{line}</p>;
      })}
    </React.Fragment>
  );
}
