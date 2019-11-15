import React from "react";

export default function randomMeme(props) {
  console.log(props.image.randomMeme);
  if (props && props) {
    return (
      <div className="random">
        <img src={props.image.randomMeme} alt="trump" />
      </div>
    );
  }
}
