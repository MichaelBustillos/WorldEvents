import React, {useState, useEffect} from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import '../style/Hub.scss';

const slideImages = [
  '../img/blm.jpg',
  '../img/endangered.jpg',
  '../img/genocide.jpg',
  '../img/homeless_shelter.jpg',
  '../img/robotics.jpg',
];

export default function Hub() {
    return (
      <div className="Hub">
        <div className="carousel">
          <Slide easing="ease">
            <div className="each-slide">
              <div className="slideBLM" id="slidePic" >
                <span>Slide 1</span>
              </div>
            </div>
            <div className="each-slide">
              <div className="slideENDANGERED" id="slidePic">
                <span>Slide 2</span>
              </div>
            </div>
            <div className="each-slide">
              <div className="slideGENOCIDE" id="slidePic">
                <span>Slide 3</span>
              </div>
            </div>
          </Slide>
        </div>
        <div className="pitch">

        </div>
        <div className="instructions">

        </div>
      </div>
    );
  }
