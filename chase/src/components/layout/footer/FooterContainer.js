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
          <div style={{ backgroundColor: '#f7f7f7' }}>
            <div className='footer_section'>
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
            <div
              style={
                {
                  // textAlign: 'center'
                }
              }
            >
              <div
                style={{
                  display: 'inline-block',
                  //   alignItems: 'center',
                  fontSize: '0.875em',
                  padding: '1.25em 1.25em 0 1.25em'
                }}
              >
                <h2 className='heading'>Other Products & Services:</h2>
                <ul style={{ display: 'inline-block', margin: '0px' }}>
                  <li className='footer-section-tile--footer--link-container'>
                    <a className='footer-section-tile--footer--link' href=''>
                      Online Banking
                    </a>
                  </li>
                  <li className='footer-section-tile--footer--link-container'>
                    <a className='footer-section-tile--footer--link' href=''>
                      Mobile Banking
                    </a>
                  </li>

                  <li className='footer-section-tile--footer--link-container'>
                    <a className='footer-section-tile--footer--link' href=''>
                      Student Center
                    </a>
                  </li>
                  <li className='footer-section-tile--footer--link-container'>
                    <a className='footer-section-tile--footer--link' href=''>
                      Deposit and Prepaid Account Agreements
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* end of footer tile */}
          </div>
        </div>
      </div>
    );
  }
}
