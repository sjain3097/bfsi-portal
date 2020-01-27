import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import HeaderDropDown from './HeaderDropDown';

class HeaderBackground extends Component {
  render() {
    return (
      <div className='backgroung-img '>
        <Header color={this.props.headerColor} />
        <div style={{ height: '70px' }}></div>
        <HeaderDropDown />
      </div>
    );
  }
}
HeaderBackground.propTypes = {
  headerColor: PropTypes.string.isRequired
};
const mapStateToProps = state => {
  return {
    headerColor: state.header.headerColor
  };
};
export default connect(mapStateToProps)(HeaderBackground);
