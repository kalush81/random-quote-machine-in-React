import React, { Component } from "react";
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHashtag, faThumbsUp, faThumbsDown, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';

class DisplayQuotesBox extends Component {
  state = {
    idx: this.props.idx,
    toggle: true
  };

  setRandIndex = () => {
    //this.timer = setTimeout(() => {
      this.setState({
        idx: Math.floor(Math.random() * (this.props.quotes.length - 0 + 1) + 0)
      });
      this.toggle();
      this.props.getColor();
    //}, 2000)
    
  };
  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }
  render() {
    
    let { quotes, color } = this.props;
    const { idx, toggle } = this.state;
    const classNamesArr = ['quote-text', toggle ? 'fade-out':'fade-in'];
    //classNamesArr.join(' ');
    return (
      <div>
        {quotes && (
          <div className="main-box">
            <div className="text-author-wrapper">
              <h2 className={classNamesArr.join(' ')} style={{color}}><FontAwesomeIcon icon={faQuoteLeft}/> {quotes[idx].quote}</h2>
              <em className="quote-author" style={{color}}>- {quotes[idx].author}</em>
            </div>
            <div className="footer-wrapper">
              <div className="ikon-wrapper">
                <Button className="ikon" style={{background:color}}><FontAwesomeIcon icon={faThumbsUp}/></Button>
                <Button className="ikon" style={{background:color}}><FontAwesomeIcon icon={faThumbsDown}/></Button>
              </div>
              <Button style={{background:color}} onClick={()=>this.setRandIndex()}>get new quote</Button>
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
