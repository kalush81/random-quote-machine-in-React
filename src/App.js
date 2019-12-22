import React from "react";
import QuoteContainer from "./Components/QuoteContainer";
import "./App.css";

class App extends React.Component {
  // getColorFromChild = thisColor => {
  //   console.log("outermost parent got color", thisColor);
  //   color = thisColor;
  // };
  state = {
    colors: [
      "#16a085","#27ae60","#2c3e50","#f39c12","#e74c3c",
      "#9b59b6","#FB6964","#342224","#472E32","#BDBB99","#77B1A9","#73A857"],
    color: ''  
  }
  getRandomColor = () => {
    const colors = this.state.colors
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    })
  }
  componentDidMount() {
    this.getRandomColor()
  }
  render() {
    return (
      <div className="App" style={{ backgroundColor: this.state.color }}>
        <QuoteContainer color={this.state.color} getColor={this.getRandomColor}/>
      </div>
    );
  }
}

export default App;
