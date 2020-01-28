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
        {/* <div style={{ height: '70px' }}></div> */}
        <HeaderDropDown />
        <div style={{ height: '20%' }}></div>
        <div className='border header_inner'>
          <img src='200.png' />
          <div
            className='container'
            style={{
              //"background-color": "green",
              height: '232px',
              width: '350px',
              display: 'flex',
              'line-height': '18px'
            }}
          >
            <div
              className='row'
              style={{
                left: '20px',
                position: 'relative',
                zIndex: 0
              }}
            >
              <p
                className='col '
                style={{
                  'font-size': '36px',
                  'font-weight': '600',
                  color: 'white',
                  'line-height': '41.4px',
                  margin: '0 0 18px 0',
                  height: '81px'
                  // width: '350px',
                }}
              >
                New Chase customers:
              </p>
              <div class='w-100' style={{ height: '0px' }}></div>
              <p
                className='col '
                style={{
                  'font-size': '18px',
                  color: 'white',
                  'line-height': '23.4px',
                  margin: '0 0 18px 0',
                  height: '68px',
                  width: '350px'
                }}
              >
                Open a Chase Total Checking® and Chase Savings℠ account with
                qualifying activities.
              </p>
              <div class='w-100' style={{ height: '0px' }}></div>
              <p className='col'>
                <a className='open_acc_button' href='#'>
                  Open an account{' '}
                </a>
              </p>
            </div>
          </div>
        </div>
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
