import React from "react";
import HashLoader from "react-spinners/HashLoader";

export default function LoadingIndicator({ show }) {
  return (
    <React.Fragment>
      {show && (
        <div className="row">
          <div style={{ margin: "auto" }}>
            <HashLoader color="white" size={80}></HashLoader>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
