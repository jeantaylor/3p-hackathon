import React, { Component } from "react";
import axios from "axios";
import Footer from "./footer";
import RandomMeme from "./randomMeme";
const corsURL = "https://cors-anywhere.herokuapp.com/";

export default class mainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomMeme: []
    };
  }
  componentDidMount() {
    const randomMemeUrl = `${corsURL}https://api.tronalddump.io/random/meme`;
    axios.get(randomMemeUrl).then(res => {
      //   console.log(res.headers["x-final-url"]);

      this.setState({
        randomMeme: res.headers["x-final-url"]
      });
    });
    //function to get name quotes for specific name
    function queryQuote(name) {
      const trumpURL = `${corsURL}https://api.tronalddump.io/search/quote?query=${name}`;
      axios.get(trumpURL).then(res => {
        //   console.log(res.data._embedded.quotes);
        const data = res.data._embedded.quotes;
        // console.log(data);
      });
    }

    //function to get a random quote from site
    function randomQuote() {
      const randomTrumpURL = `${corsURL}https://api.tronalddump.io/random/quote`;
      axios.get(randomTrumpURL).then(res => {
        // console.log(res);
      });
    }
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <RandomMeme image={this.state} />
        <Footer />
      </div>
    );
  }
}
