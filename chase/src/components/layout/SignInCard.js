import React, { Component } from 'react';

export default class SignInCard extends Component {
  render() {
    return (
      <div className='card_sign_in d-s-block d-xs-block'>
        <div className='card_sign_in--heading'>Welcome</div>
        <div
          //className='card-body'
          style={{
            'margin-top': '5%',
            'margin-left': '10%'
          }}
        >
          <a href='' className='sign_in_card_button'>
            Sign in
          </a>
        </div>
        <div style={{ 'margin-top': '5%', 'margin-left': '10%' }}>
          <a className='card_sign_in--link' href='#'>
            Not enrolled? Sign up now
          </a>
        </div>
      </div>
    );
  }
}
