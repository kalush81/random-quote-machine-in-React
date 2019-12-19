import React, { Component } from "react";
import './Quote.css';

export default class QuoteContainer extends Component {
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
