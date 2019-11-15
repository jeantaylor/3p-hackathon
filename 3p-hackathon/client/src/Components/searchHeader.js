import React from "react";
import TrumpLogo from "../Assets/trump-logo.jpg";

//input to {name} for search

export default function SearchHeader(props) {
  return (
    <div className="header__div">
      <img className="header__logo" src={TrumpLogo} alt="trump-logo"></img>
      <div className="header__searchbar__div">
        <form id="form" onSubmit={props.dump}>
          <input
            className="header__searchbar"
            type="text"
            name="search"
            placeholder="search..."
          ></input>

          <button className="header__button" type="submit">
            Take a Dump
          </button>
        </form>
      </div>
    </div>
  );
}
