import React, { Component } from 'react';

export default class AdsContainer extends Component {
  render() {
    return (
      <div className='ad_tile'>
        <div className='ad_inner_tile'>
          <div className='ad_title_container '>
            <p className='ad_title'>Get access to cash for your business</p>
          </div>
          <div
            class='ad_img_container'
            style={{
              float: 'left'
            }}
          >
            <img
              src='https://sites.chase.com/content/services/structured-image/image.copy.jpg/XCRT/Tile-Secondary/2019/60438_19-289_CFBcampaign_SmTile.jpg'
              alt=''
            />
          </div>
          <div class=''>
            <div class=''>
              <div class='ad_content'>
                <p>
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
