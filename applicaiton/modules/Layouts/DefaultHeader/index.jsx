import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'next/router';
import Link from 'next/link';

// Assets
import './styles.scss';
import Logo from 'Static/images/logo.jpg';

class DefaultHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {
    return (
      <Fragment>
        <header className="has-mobile-menu">
          <div id="rt-sticky-placeholder" />
          <div id="header-menu" className="header-menu menu-layout1 bg--light pr--30 pl--30">
            <div className="container-fluid">
              <div className="row no-gutters d-flex align-items-center">
                <div className="col-lg-2 d-flex justify-content-start">
                  <div className="logo-area">
                    <a href="index.html" className="temp-logo" id="temp-logo">
                      <img src={Logo} alt="logo" className="img-fluid" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-7 d-flex justify-content-center">
                  <nav id="dropdown" className="template-main-menu">
                    <ul>
                      <li className="hide-on-mobile-menu">
                        <Link href='/'>
                          <a href="/">HOME</a>
                        </Link>
                      </li>
                      <li className="hide-on-desktop-menu">
                        <Link href='/'>
                          <a href="/">HOME</a>
                        </Link>
                      </li>
                      <li>
                        <a href="about.html">ABOUT</a>
                      </li>
                      <li>
                        <Link href='#'>
                          <a href="#">CATEGORIES</a>
                        </Link>
                        <ul className="dropdown-menu-col-1">
                          <li>
                            <a href="/">Blog Details 1</a>
                          </li>
                          <li>
                            <a href="/">Blog Details 2</a>
                          </li>
                          <li>
                            <a href="/">Blog Details 3</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">BLOG</a>
                      </li>
                      <li>
                        <Link href='/contact'>
                          <a href="/contact">CONTACT</a>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="col-lg-3 d-flex justify-content-end">
                  <div className="header-action-items">
                    <ul className="divider-style-border d-none d-xl-block">
                      <li className="header-search-box">
                        <a href="#header-search" title="Search">
                          <i className="flaticon-magnifying-glass" />
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li className="item-social-layout2"> <a href="#"><i className="fab fa-facebook-f" /></a></li>
                      <li className="item-social-layout2"> <a href="#"><i className="fab fa-twitter" /></a></li>
                      <li className="item-social-layout2"> <a href="#"><i className="fab fa-youtube" /></a></li>
                      <li className="item-social-layout2"> <a href="#"><i className="fas fa-rss" /></a></li>
                      <li className="item-social-layout2"> <a href="#"><i className="fab fa-linkedin-in" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    defaultTitle: state.document.defaultTitle,
    headerMenu: state.headerMenu,
  };
}

export default withRouter(connect(mapStateToProps)(DefaultHeader));
