import { React } from "react";
import "../App.css";

function About() {
  return (
    <div className="about">
      <h1>The founder:</h1>
      <img
        src="https://comicvine.gamespot.com/a/uploads/scale_small/11/111746/6556040-crazy_cat_lady.png"
        style={{ width: "80px" }}
        className="cruella-photo"
      />

      <h5>
        Hi there, I'm the mastermind of CatMarket. I prefer to keep my name private because some people say that what I do is not entirely legal. As you can see from my photo, I'm a lovely lady that has always dedicated her life to her cats. 
      </h5>
      <p>
        PS: Don't bother because you won't find any contact details.
      </p>
    </div>
  );
}
export default About;
