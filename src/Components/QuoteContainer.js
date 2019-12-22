import React, { Component } from "react";
import "./Quote.css";
import request from "superagent";
import { connect } from "react-redux";
import { quotesFetched } from "../actions/fetchQuotes";
import DisplayQuotesBox from "./DisplayQuotesBox";

class QuoteContainer extends Component {
  state = {
    idx: null
  };
  componentDidMount() {
    request
      .get(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      )
      .then(res => {
        const quotes = JSON.parse(res.text).quotes;
        this.props.submitNewQuotes(quotes);
        this.setState({ idx: quotes.length });
      })
      .catch(err => console.error(err));
  }

  render() {
    const idx = Math.floor(Math.random() * this.state.idx);
    const { getColor, color } = this.props;
    return (
      this.state.idx && (
        <DisplayQuotesBox getColor={getColor} idx={idx} color={color} />
      )
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    submitNewQuotes: quotes => {
      dispatch(quotesFetched(quotes));
    }
  };
};
export default connect(null, mapDispatchToProps)(QuoteContainer);
