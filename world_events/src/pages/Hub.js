import React, {useState, useEffect} from 'react';
import { Slide } from 'react-slideshow-image';
import BlogList from '../component/BlogList';
import 'react-slideshow-image/dist/styles.css'
import '../style/Hub.scss';
import { BLOGS } from '../tempdata';

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
        <div className="title">
          <h1>Insight</h1>
        </div>
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
        <div className="posts">
          <BlogList
            blogList={BLOGS}
            />
        </div>
        <div className="instructions">

        </div>
      </div>
    );
  }
