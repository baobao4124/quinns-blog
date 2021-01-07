import React, {Component} from 'react';

export default class SubscribedWidget extends Component {
  render() {
    return (
      <div className="widget">
        <div className="section-heading heading-dark">
          <h3 className="item-heading">SUBSCRIBE &amp; FOLLOW</h3>
        </div>
        <div className="widget-follow-us">
          <ul>
            <li className="single-item"><a href="#"><i className="fab fa-facebook-f" /></a></li>
            <li className="single-item"><a href="#"><i className="fab fa-twitter" /></a></li>
            <li className="single-item"><a href="#"><i className="fab fa-instagram" /></a></li>
            <li className="single-item"><a href="#"><i className="fab fa-linkedin-in" /></a></li>
            <li className="single-item"><a href="#"><i className="fab fa-vimeo-v" /></a></li>
            <li className="single-item"><a href="#"><i className="fab fa-pinterest-p" /></a></li>
            <li className="single-item"><a href="#"><i className="fab fa-github-alt" /></a></li>
            <li className="single-item"><a href="#"><i className="fab fa-kickstarter-k" /></a></li>
            <li className="single-item"><a href="#"><i className="fab fa-behance" /></a></li>
            <li className="single-item"><a href="#"><i className="fab fa-google-plus-g" /></a></li>
          </ul>
        </div>
      </div>
    );
  }
}
