/*
*Home.js Component
*/
import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import _ from 'lodash';
import './Home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { browseState } = this.props;

    const CarouselPage = () => {
      return (
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      )
    }

    return (
      <div id='home-container'>
        {CarouselPage()}
      </div>
    );
  }
}

export default Home;
