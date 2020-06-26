import React from "react";

function HelloWorld(props) {
  console.log("HelloWorld PROPS: ", props);
  console.log("name: ", props.match.params.name);

  let Name = props.match.params.name;
  if (!Name) Name = "World";
  return (
    <div className="HelloWorld">
      <h1>Hello, {Name}</h1>
    </div>
  );
}

export default HelloWorld;
