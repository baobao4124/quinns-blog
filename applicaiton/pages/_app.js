import React from 'react';
import App from 'next/app';
import {Provider} from 'react-redux';
import withReduxStore from '../libs/with-redux-store';

// Components
import Header from 'Modules/Layouts/Header';
import Search from 'Components/Search';
import DefaultHeader from 'Modules/Layouts/DefaultHeader';
import DefaultFooter from 'Modules/Layouts/DefaultFooter';
import Instagram from 'Modules/Instagram';

class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {pageProps};
  }

  render() {
    const {Component, pageProps, reduxStore} = this.props;

    return (
      <>
        <Provider store={reduxStore}>
          <Header pageTitle="Header title" />
          <div className="app-wrapper">
            <DefaultHeader />
            <div id="body">
              <Component {...pageProps} />
            </div>
          </div>
          <Instagram />
          <DefaultFooter />
          <Search />
        </Provider>
      </>
    );
  }
}

export default withReduxStore(MyApp);
