import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignInCard from './SignInCard';
import HeaderDropDown from './HeaderDropDown';

class HeaderBackground extends Component {
  render() {
    return (
      <div className='backgroung-img '>
        <Header color={this.props.headerColor} />
        {/* <div style={{ height: '70px' }}></div> */}
        <HeaderDropDown />
        <div style={{ height: '20%' }}></div>
        <div className=' header_inner'>
          <img src='200.png' />
          <div className='header-inner__container'>
            <div className='row'>
              <p className='col' className='header-inner__heading'>
                New Chase customers:
              </p>
              <div class='w-100' style={{ height: '0px' }}></div>
              <p className='col ' className='header-inner__desc'>
                Open a Chase Total Checking® and Chase Savings℠ account with
                qualifying activities.
              </p>
              <div class='w-100' style={{ height: '0px' }}></div>
              <p className='col'>
                <a className='open_acc_button' href=''>
                  Open an account{' '}
                </a>
              </p>
            </div>
          </div>
        </div>
        <SignInCard />
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
