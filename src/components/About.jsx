import React from "react";

function About(props) {
  console.log("ABOUT PROPS: ", props);

  return (
    <div className="About">
      <h1>About</h1>
      <button
        onClick={() => {
          props.history.push("/contact");
        }}
      >
        Contact Us
      </button>
    </div>
  );
}

export default About;
