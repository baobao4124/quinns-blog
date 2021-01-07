import React, {Component} from 'react';

export default class Search extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       
    };
  }
  
  render() {
    return (
      <div id="header-search" className="header-search">
        <button type="button" className="close">×</button>
        <form className="header-search-form">
          <input type="search" value="" placeholder="Type here........" />
          <button type="submit" className="search-btn">
            <i className="flaticon-magnifying-glass" />
          </button>
        </form>
      </div>
    );
  }
}
