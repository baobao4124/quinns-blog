import React, {Component} from 'react';

export default class AboutWidget extends Component {
  render() {
    return (
      <div className="widget">
        <div className="section-heading heading-dark">
          <h3 className="item-heading">ABOUT ME</h3>
        </div>
        <div className="widget-about">
          <figure className="author-figure"><img src="img\figure\figure.jpg" alt="about" /></figure>
          <figure className="author-signature"><img src="img\figure\signature.png" alt="about" /></figure>
          <p>Fusce mauris auctor ollicituder teary iner hendrerit risusey aeenean rauctor pibus doloer.</p>
        </div>
      </div>
    );
  }
}
