import React, {Component} from 'react';

export default class CategoriesWidget extends Component {
  render() {
    return (
      <div className="widget">
        <div className="section-heading heading-dark">
          <h3 className="item-heading">CATEGORIES</h3>
        </div>
        <div className="widget-categories">
          <ul>
            <li>
              <a href="#">Beauty
                <span>(35)</span>
              </a>
            </li>
            <li>
              <a href="#">Fashion
                <span>(10)</span>
              </a>
            </li>
            <li>
              <a href="#">Food
                <span>(25)</span>
              </a>
            </li>
            <li>
              <a href="#">Life Style
                <span>(15)</span>
              </a>
            </li>
            <li>
              <a href="#">Travel
                <span>(22)</span>
              </a>
            </li>
            <li>
              <a href="#">Video
                <span>(18)</span>
              </a>
            </li>
            <li>
              <a href="#">Technology
                <span>(22)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
