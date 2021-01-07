import React from 'react';

// Assests
import './styles.scss';

export default class DefaultFooter extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
       
    };
  }
  
  render() {
    return (
      <footer className="footer-wrap-layout2">
        <div className="container">
          <div className="footer-box-layout2">
            <ul className="footer-social">
              <li><a href="#"><i className="fab fa-facebook-f" />259k LIKES</a></li>
              <li><a href="#"><i className="fab fa-twitter" />480k FOLLOWERS</a></li>
              <li><a href="#"><i className="fab fa-instagram" />280k FOLLOWERS</a></li>
              <li><a href="#"><i className="fab fa-youtube" />180k SUBSCRIBER</a></li>
            </ul>
            <div className="copyright">© 2019 blogxer. All Rights Reserved.</div>
          </div>
        </div>
      </footer>
    );
  }
}
