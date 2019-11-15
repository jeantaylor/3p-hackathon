import React from "react";
import TrumpLogo from "../Assets/trump-logo.jpg";
const form = document.querySelector("#form");

//input to {name} for search

export default function SearchHeader() {
  // form.addEventListener("click",(event) => {
  //   event.preventDefault();

  // );}
  //  }
  return (
    <div className="header__div">
      <img className="header__logo" src={TrumpLogo} alt="trump-logo"></img>
      <div className="header__searchbar__div">
        <form id="form">
          <input
            className="header__searchbar"
            type="text"
            placeholder="search..."
          ></input>

          <button className="header__button">Take a Dump</button>
        </form>
      </div>
    </div>
  );
}
