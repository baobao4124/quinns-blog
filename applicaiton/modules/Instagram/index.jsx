import React, {Component} from 'react';

// Assests
import './styles.scss';

export default class Instagram extends Component {
  render() {
    return (
      <section className="instagram-feed-wrap-1">
        <div className="instagram-feed-title-1"><a href="#"><i className="fab fa-instagram" />FOLLOW US ON INSTAGRAM</a></div>
        <ul className="instagram-feed-figure-1">
          <li>
            <a href="#"><img src="img\social-figure\social-figure22.jpg" alt="Social" /></a>
          </li>
          <li>
            <a href="#"><img src="img\social-figure\social-figure23.jpg" alt="Social" /></a>
          </li>
          <li>
            <a href="#"><img src="img\social-figure\social-figure24.jpg" alt="Social" /></a>
          </li>
          <li>
            <a href="#"><img src="img\social-figure\social-figure25.jpg" alt="Social" /></a>
          </li>
          <li>
            <a href="#"><img src="img\social-figure\social-figure26.jpg" alt="Social" /></a>
          </li>
          <li>
            <a href="#"><img src="img\social-figure\social-figure27.jpg" alt="Social" /></a>
          </li>
          <li>
            <a href="#"><img src="img\social-figure\social-figure28.jpg" alt="Social" /></a>
          </li>
          <li>
            <a href="#"><img src="img\social-figure\social-figure29.jpg" alt="Social" /></a>
          </li>
        </ul>
      </section>
    );
  }
}
