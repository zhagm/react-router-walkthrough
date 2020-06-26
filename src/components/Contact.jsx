import React from "react";
import Child from "./Child";

function Contact(props) {
  console.log("CONTACT PROPS: ", props);

  return (
    <div className="Contact">
      <h1>Contact Us Here</h1>
      <Child />
    </div>
  );
}

export default Contact;
