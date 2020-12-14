import React, { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.querySelector("body").className = "home";
  }, []);
  return (
    <div className="row">
      <h1>Page Not Found</h1>
    </div>
  );
}
