import React from "react";
import PicCarousel from "../PicCarousel";

class Home extends React.Component {
  state = {
    flash: true,
    border: '3px solid red'
  }

  componentDidMount() {
    this.flashInterval();
  }

  flashInterval = () => {
    setInterval(() => {
      this.setState({
        flash: !this.state.flash
      })
      this.flashing();
    }, 1000);
  }

  flashing = () => {
    if (this.state.flash === false) {
      this.setState({
        border: '3px solid pink'
      })
    } else {
      this.setState({
        border: '3px solid red'
      })
    }
  }

  render () {
    const styles = {
      textStyle: {
        border: this.state.border
      }
    };

    const { textStyle } = styles

    return (
      <div className="app">
        <div className="backHome">
          <div className="hBox">
            <h1 className="head1 hpad">
              <div>Aida Jugo</div>
              <div>Social Dance</div> 
              <div>& Ballroom </div>
              <div>Events</div>
            </h1>
          </div>
        </div>
        <div className="steps"></div>
        <div className="marg">
          <div className="disp">
            <div className="profile"></div>
            <div className="book" style={textStyle}>
              <div className="und">Book Your Next Event</div>
              <div>Aida Jugo</div>
              <div>(909) 680-2062</div>
            </div>
          </div>
          <div className="adr">
            <div className="und">Location:</div>
            <div>8351 Garden Grove Blvd</div>
            <div>Garden Grove, CA 92844</div>
          </div>
        </div>
        <div className="backCar">
          <div className="picCar">
            <PicCarousel></PicCarousel>
          </div>        
        </div>
        <div className="steps"></div>
      </div>
    )
  }
}

export default Home;