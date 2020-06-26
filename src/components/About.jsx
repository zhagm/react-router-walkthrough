import React from "react";

function About(props) {
  console.log("ABOUT PROPS: ", props);

  return (
    <div className="About">
      <h1>About</h1>
      <button
        onClick={() => {
          /* Implement this button to redirect us to "/contact" on click */
        }}
      >
        Contact Us
      </button>
    </div>
  );
}

export default About;
