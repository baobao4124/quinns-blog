import React, {Component} from 'react';

export default class GetLetterUpdateWidget extends Component {
  render() {
    return (
      <div className="widget">
        <div className="widget-newsletter-subscribe-dark">
          <h3>GET LATEST UPDATES</h3>
          <p>NEWSLETTER SUBSCRIBE</p>
          <form className="newsletter-subscribe-form">
            <div className="form-group">
              <input type="text" placeholder="your e-mail address" className="form-control" name="email" data-error="E-mail field is required" required="" />
              <div className="help-block with-errors" />
            </div>
            <div className="form-group mb-none">
              <button type="submit" className="item-btn">SUBSCRIBE</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
