import React, { Component } from 'react';
import Header from './Header';
import HeaderDropDown from './HeaderDropDown';
export default class HeaderBackground extends Component {
  render() {
    return (
      <div>
        <Header />
        <HeaderDropDown />
      </div>
    );
  }
}
