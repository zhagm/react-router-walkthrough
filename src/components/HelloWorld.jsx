import React from "react";

function HelloWorld(props) {
  console.log("HELLOWORLD PROPS: ", props);

  return (
    <div className="HelloWorld">
      <h1>Hello, {props.match.params.name || "World"}</h1>
    </div>
  );
}

export default HelloWorld;
