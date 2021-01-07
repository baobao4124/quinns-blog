import React, {Fragment} from 'react';

// Actions
import {updateDocument} from '../store';
import DefaultMain from 'Modules/Layouts/DefaultMain';

const PATH = 'application/pages/index.jsx';

class Home extends React.Component {
  static async getInitialProps({reduxStore, req}) {
    let states = reduxStore.getState();

    // Set document title default in home page
    if (states && states.document && states.document.defaultTitle) {
      reduxStore.dispatch(updateDocument({
        title: states.document.defaultTitle,
      }));
    }

    return {};
  }

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return  (
      <Fragment>
        <div className="container">
          <DefaultMain />
        </div>
      </Fragment>
    );
  }
}

export default Home;
