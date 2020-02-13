import React, { Component } from 'react';
import FollowUs from '../FollowUs';

import FooterTiles from './FooterTiles';

export default class FooterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followUs: [
        'fa fa-facebook-f  footer_follow-us_item',
        'fa fa-instagram  footer_follow-us_item',
        'fa fa-twitter footer_follow-us_item',
        'fa fa-youtube footer_follow-us_item',
        'fa fa-linkedin footer_follow-us_item',
        'fa fa-pinterest footer_follow-us_item'
      ]
    };
  }
  render() {
    return (
      <div className='footer' style={{ marginTop: '5%', textAlign: 'center' }}>
        <div className=''>
          {/* start of FollowUs section */}
          <div>
            <div className='footer_follow-us'>
              Follow us:
              {this.state.followUs.map(c => (
                <FollowUs c={c} />
              ))}
              <FollowUs />
            </div>
          </div>
          {/* end of Follow us section */}
          {/* start of footer header section */}
          <div style={{ backgroundColor: '#F3F0E9' }}>
            <div className=' footer_section'>
              <div className='footer--header'>
                <p class='footer--header--text'>
                  We're here to help you manage your money today and tomorrow
                </p>
              </div>
              {/* end of footer header section */}
              {/* start of footer tiles section */}
              <FooterTiles />
              {/* <FooterTile iconUrl='money-check.svg' /> */}
            </div>
            {/* end of footer tile */}
          </div>
        </div>
      </div>
    );
  }
}
