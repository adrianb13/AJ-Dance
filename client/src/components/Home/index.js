import React from "react";
import PicCarousel from "../PicCarousel";

class Home extends React.Component {
  state = {
    flash: true,
    border: '5px solid purple'
  }

  componentDidMount() {
    //this.flashInterval();
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
        border: '5px solid pink'
      })
    } else {
      this.setState({
        border: '5px solid purple'
      })
    }
  }

  render () {
/*     const styles = {
      textStyle: {
        border: this.state.border
      }
    };

    const { textStyle } = styles */

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
            <div className="marg3">
              <img src="./images/dancer1.png" className="dancer1" alt="dancer1"></img>
              <div className="spotlight1"></div>
              <div className="book" /* style={textStyle} */>
                <div className="und">Book Your Next Event</div>
                <div>Aida Jugo</div>
                <div>(909) 680-2062</div>
              </div>
              <img src="./images/dancer2.png" className="dancer2" alt="dancer2"></img>
              <div className="spotlight2"></div>
            </div>
          </div>
          <div className="adr">
            <div className="und">Location:</div>
            <div>8351 Garden Grove Blvd</div>
            <div>Garden Grove, CA 92844</div>
          </div>
          <div className="bord"></div>
          <div className="adr">
            <div className="und">Weekly Event:</div>
            <div className="red">"Forever Young Event"</div>
            <div>Thursdays: 8:00pm - 12:00am</div>
            <div>$15/Person (Incl. Dinner)</div>
            <div>Open To The Public</div>
            <div className="pad">DJ: Vingo Regino from April Boys</div>
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