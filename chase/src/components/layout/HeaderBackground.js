import React, { Component } from 'react';
import Header from './Header';
import HeaderDropDown from './HeaderDropDown';
import SignInCard from './SignInCard';
export default class HeaderBackground extends Component {
  render() {
    return (
      <div>
        <div className='header--background'>
          <Header />
          <HeaderDropDown />
          <div style={{ position: 'relative', top: '80px' }}>
            <div className='container'>
              <div class='grid-container'>
                <div class='item1'>
                  <img style={{}} src='200.png' />
                </div>
                <div class='item2'>
                  <p>New Chase customers:</p>
                </div>
                <div class='item3'>
                  <p
                  // style={{
                  //   'font-weight': '400',
                  //   'font-size': '12px',
                  //   'line-height': '1.3em'
                  // }}
                  >
                    Open a Chase Total Checking® and Chase Savings℠ account with
                    qualifying activities.
                  </p>
                </div>
                <div class='item4 '>
                  <p className=''>
                    <a className='open_acc_button' href=''>
                      Open an account{' '}
                    </a>
                  </p>
                </div>

                <div class='item5 d-m-block'>
                  <SignInCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
