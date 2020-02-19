import React, { Component } from 'react';

export default class SignInCard extends Component {
  render() {
    return (
      <div className='card_sign_in d-s-block d-xs-block '>
        <div className='card_sign_in--heading '>Welcome</div>
        <div
          //className='card-body'
          style={{}}
        >
          <a href=''>
            <p className='sign_in_card_button'>Sign in</p>
          </a>
        </div>
        <div style={{ 'margin-left': '10%' }}>
          <a className='card_sign_in--link' href='#'>
            Not enrolled? Sign up now
          </a>
        </div>
      </div>
    );
  }
}
