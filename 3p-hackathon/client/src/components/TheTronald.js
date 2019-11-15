import React from "react";
import tronald from "../Assets/Images/tronalddump_850x850.png";

export default function TheTronald(props) {
  //   if (props.quote && props.quote) {
  console.log(props);
  return (
    <section className="tronald">
      <div className="tronald__dump">
        <div className="tronald__quote">{props.quote}</div>
        <img className="tronald__img" alt="trump" src={tronald} />
      </div>
    </section>
  );
}
