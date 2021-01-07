import React from 'react';

// Assets
import './styles.scss';

function FeaturedPostsWidget(props) {
  return (
    <div className="widget">
      <div className="section-heading heading-dark">
        <h3 className="item-heading">FEATURED POSTS</h3>
      </div>
      <div className="widget-featured-feed">
        <div className="featured-box-layout2">
          <div className="item-img">
            <a href="single-blog.html"><img src="img\blog\blog34.jpg" alt="Brand" className="img-fluid" /></a>
          </div>
          <div className="item-content">
            <ul className="entry-meta meta-color-dark">
              <li><i className="fas fa-tag" />Travel</li>
              <li><i className="fas fa-calendar-alt" />Jan 19, 2019</li>
            </ul>
            <h4 className="item-title"><a href="single-blog.html">Finding Your Own Styling
                                                City</a></h4>
            <p>Phasellus lorem ligula, semper area
                                            vehicula dolor vitae eleifen dear
                                            omnisnatus error sitter.</p>
          </div>
        </div>
        <div className="featured-box-layout3">
          <div className="item-content">
            <ul className="entry-meta meta-color-dark">
              <li><i className="fas fa-tag" />Travel</li>
              <li><i className="fas fa-calendar-alt" />Jan 19, 2019</li>
            </ul>
            <h4 className="item-title"><a href="single-blog.html">Finding Your Own Styling
                                                City</a></h4>
            <p>Phasellus lorem ligula, semper area
                                            vehicula dolor vitae eleifen dear
                                            omnisnatus error sitter.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedPostsWidget;
