import React from "react";
import { useHistory } from "react-router-dom";

function Child(props) {
  console.log("Child PROPS: ", props);

  let history = useHistory();

  return (
    <div className="Child">
      <h1>Child</h1>
      <button
        onClick={() => {
          history.push("/");
        }}
      >
        Go Home
      </button>
    </div>
  );
}

export default Child;
