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
                  <img src='200.png' />
                </div>
                <div class='item2'>
                  <h1>New Chase customers:</h1>
                </div>
                <div class='item3'>
                  <p>
                    Open a Chase Total Checking® and Chase Savings℠ account with
                    qualifying activities.
                  </p>
                </div>
                <div class='item4'>
                  <p className='col'>
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
