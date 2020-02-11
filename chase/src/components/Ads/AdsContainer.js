import React, { Component } from 'react';

export default class AdsContainer extends Component {
  render() {
    return (
      <div
        className=''
        style={{
          padding: ' 0 .5em 0 .5em',
          marginLeft: '7%',
          marginTop: '7%',
          borderTop: '1px solid #d9d9d9',
          //   backgroundColor: 'yellow',
          width: '85%'
        }}
      >
        <div style={{ marginTop: '3%', marginLeft: '2%' }}>
          <div
            className='ad_title '
            style={{
              display: 'inline-block',
              width: '52%'
            }}
          >
            <p
              style={{
                fontWeight: '300',
                fontSize: '3.125em',
                lineHeight: '56px',
                color: '#414042'
              }}
            >
              Get access to cash for your business
            </p>
          </div>
          <div
            class=''
            style={{
              float: 'left',
              paddingRight: '24px',
              paddingLeft: '0'
            }}
          >
            <img
              src='https://sites.chase.com/content/services/structured-image/image.copy.jpg/XCRT/Tile-Secondary/2019/60438_19-289_CFBcampaign_SmTile.jpg'
              alt='  '
            />
          </div>
          <div class=''>
            <div class=''>
              <div class=''>
                <p
                  style={{
                    fontWeight: '300',
                    fontSize: '18px',
                    color: '#414042'
                  }}
                >
                  Be ready for whatever comes your way with a Chase Business
                  Line of Credit.
                </p>
              </div>
              <div class=''>
                <div>
                  <p class='btn btn-success btn-lg' style={{ color: 'white' }}>
                    Learn more
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
