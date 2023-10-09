import { React } from "react";
import "../App.css";

function About() {
  return (
    <div className="about">
      <h1>The cat dealers</h1>
      <img
        src="https://lumiere-a.akamaihd.net/v1/images/ct_video_101dalmatians_cruelladevil_ddt-16771_7d267b94.jpeg"
        style={{ width: "150px" }} className="cruella-photo"
      />

      <h4>
        We are the founders of the biggest online cat-market. Our cats are
        healthy and expect princess/prince treatment. If you think you can make
        a good server for our furry friends, have a look at our catalog.
      </h4>
      <p>
        PS: If you have any questions there is nothing we can do to help you.
      </p>
    </div>
  );
}
export default About;
