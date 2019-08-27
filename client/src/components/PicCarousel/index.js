import React from "react";
import { Carousel } from "react-bootstrap";
import pics from "../../assets/data/pics.json";

class PicCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
      pictures: pics
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        {this.state.pictures.map(picture => (
          <Carousel.Item key={picture.id}>
            <img
              className="imgSize"
              src={picture.image}
              alt={picture.name}
            /> 
            <Carousel.Caption>
              <h4 className="banCar">{picture.name}</h4>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    )
  }
}

export default PicCarousel;