// write code for Welcome component here
import React from "react";

export default function Welcome(props) {
  return (
    <div>
      <h2>
        Hey ! <h1>{props.name}</h1>
        Welcome to Newton School.
      </h2>
    </div>
  );
}
