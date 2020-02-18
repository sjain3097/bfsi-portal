import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
const HeaderDropDownElement = ({
  subTitle,
  Icon,
  headerDropDownElementHeight = '0%'
}) => (
  <span
    className='drop-down-element'
    style={{
      overflow: 'hidden',
      height: headerDropDownElementHeight,
      transition: '2s'
    }}
  >
    <a href={'link'} className='header--link'>
      <p
        className='col '
        style={{
          height: '45px',
          width: '123px',
          color: 'white',
          textAlign: 'center'
        }}
      >
        <Icon style={{ transform: 'scale(0.4)' }} />
      </p>

      <p>{subTitle}</p>
    </a>
  </span>
);
HeaderDropDownElement.propTypes = {
  headerDropDownElementHeight: PropTypes.string.isRequired
};
const mapStateToProps = state => {
  return {
    headerDropDownElementHeight: state.header.headerDropDownElementHeight
  };
};

export default connect(mapStateToProps)(HeaderDropDownElement);
