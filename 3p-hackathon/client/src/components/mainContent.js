import React, { Component } from "react";
import axios from "axios";
import Footer from "./footer";
import RandomMeme from "./randomMeme";
import Header from "./searchHeader";
import Tronald from "./TheTronald";
const corsURL = "https://cors-anywhere.herokuapp.com/";

export default class mainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomMeme: [],
      quote: ""
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
  }
  //function to get name quotes for specific name
  queryQuote = event => {
    event.preventDefault();
    console.log(event.target);
    console.log(event.target.search.value);
    const trumpURL = `${corsURL}https://api.tronalddump.io/search/quote?query=${event.target.search.value}`;
    axios.get(trumpURL).then(res => {
      if (
        !res.data._embedded.quotes ||
        res.data._embedded.quotes.length === 0
      ) {
        this.setState({
          quote: "I haven't spoken about that yet... Must not be very important"
        });
      } else {
        const data = res.data._embedded.quotes[0].value;
        this.setState({ quote: data });
      }
    });
  };

  //function to get a random quote from site
  randomQuote() {
    const randomTrumpURL = `${corsURL}https://api.tronalddump.io/random/quote`;
    axios.get(randomTrumpURL).then(res => {
      // console.log(res);
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Header dump={this.queryQuote} />
        <Tronald quote={this.state.quote} />
        <RandomMeme image={this.state} />
        <Footer />
      </div>
    );
  }
}
