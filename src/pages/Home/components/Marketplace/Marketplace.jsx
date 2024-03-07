import React from 'react';

import './marketplace.scss';

export default function Marketplace() {
  return (
    <div className="marketplace">
      <div className="container">
        <h2>Explore the marketplace</h2>
        <ul className="marketplace__list d-flex flex-wrap">
          <li>
            <a href="#">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/graphics-design.91dfe44.svg"
                alt=""
              />
              Graphics & Design
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/online-marketing.a3e9794.svg"
                alt=""
              />
              Digital Marketing
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/writing-translation.a787f2f.svg"
                alt=""
              />
              Writing & Translation
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/video-animation.1356999.svg"
                alt=""
              />
              Video & Animation
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/music-audio.ede4c90.svg"
                alt=""
              />
              Music & Audio
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/programming.6ee5a90.svg"
                alt=""
              />
              Programming & Tech
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/business.fabc3a7.svg"
                alt=""
              />
              Business
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/lifestyle.112b348.svg"
                alt=""
              />
              Lifestyle
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/data.855fe95.svg"
                alt=""
              />
              Data
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/photography.0cf5a3f.svg"
                alt=""
              />
              Photography
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
