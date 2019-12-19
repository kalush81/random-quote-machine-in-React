import React, { Component } from "react";
import './Quote.css';
import request from 'superagent';
import { connect } from 'react-redux';
import { quotesFetched } from '../actions/fetchQuotes';

class QuoteContainer extends Component {
  componentDidMount () {
    request
        .get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
        .then(res => {
            const quotes = JSON.parse(res.text).quotes
            this.props.submitNewQuotes(quotes); 
        })
        .catch(err => console.error(err));
  }  
  render() {
    return (
      <div>
        <div className="main-box">
          <div className="text-author-wrapper">
            <h2 className="quote-text">
              Life isn’t about getting and having, it’s about giving and being."
            </h2>
            <em className="quote-author">- author name</em>
          </div>
          <div className="footer-wrapper">
            <div className="ikon-wrapper">
              <i className="ikon">i</i>
              <i className="ikon">i</i>
            </div>
            <button>new quote</button>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
        submitNewQuotes: (quotes) => {
            dispatch(quotesFetched(quotes))
        }
    }
}
export default connect(null, mapDispatchToProps)(QuoteContainer);