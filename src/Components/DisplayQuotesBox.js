import React, { Component } from "react";
import { connect } from "react-redux";

class DisplayQuotesBox extends Component {
  state = {
    idx: this.props.idx
  };

  setRandIndex = () => {
    this.setState({
      idx: Math.floor(Math.random() * (this.props.quotes.length - 0 + 1) + 0)
    });
  };
  
  render() {
    const { quotes } = this.props;
    const { idx } = this.state;
    
    return (
      <div>
        {quotes && (
          <div className="main-box">
            <div className="text-author-wrapper">
              <h2 className="quote-text">{quotes[idx].quote}</h2>
              <em className="quote-author">- {quotes[idx].author}</em>
            </div>
            <div className="footer-wrapper">
              <div className="ikon-wrapper">
                <i className="ikon">i</i>
                <i className="ikon">i</i>
              </div>
              <button onClick={this.setRandIndex}>get new quote</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    quotes: state.quotes
  };
}
export default connect(mapStateToProps, null)(DisplayQuotesBox);
