import React from "react";

export default function ({ error }) {
  return (
    <p
      style={{
        color: "red",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "5px",
        margin: "0px",
      }}
    >
      {error}
    </p>
  );
}
