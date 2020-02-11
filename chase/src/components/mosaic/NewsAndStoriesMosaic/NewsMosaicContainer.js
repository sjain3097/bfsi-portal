import React, { Component } from 'react';

export default class NewsMosaicContainer extends Component {
  render() {
    const iconStyle = { padding: '6px', fontSize: '24px' };
    return (
      <div
        className='container-fluid'
        style={{
          marginTop: '10%',
          backgroundColor: '#F3F0E9'
        }}
      >
        <div
          className='mosaic-b__container'
          style={{ margin: '0 auto', maxWidth: '75em' }}
        >
          {/* start of mosaic heading */}
          <div className='row'>
            <div
              className='mosaic-b_heading col-md-6'
              style={{ fontSize: '50px', fontWeight: '300' }}
            >
              News & Stories
            </div>
            <div
              className='mosaic__follow-us col-md-6'
              style={{
                fontSize: '18px',
                textAlign: 'right',
                paddingTop: '1.5%'
              }}
            >
              Follow us:
              <i class='fa fa-facebook-f' style={iconStyle}></i>
              <i class='fa fa-instagram' style={iconStyle}></i>
              <i class='fa fa-twitter' style={iconStyle}></i>
              <i class='fa fa-youtube' style={iconStyle}></i>
              <i class='fa fa-linkedin' style={iconStyle}></i>
              <i class='fa fa-pinterest' style={iconStyle}></i>
            </div>
          </div>
          {/* end of mosaic heading */}
          <div className='row'>
            <div className='col-md-4'>
              <div>
                <img
                  style={{ width: '77%' }}
                  src='https://chase.com/content/dam/chasecom/en/newsroom/images/primary/081119-promo-ar-ceo-letters-audio-hero.png/_jcr_content/renditions/cq5dam.web.461.259.png'
                />
              </div>
              <div
                className='mosaic-b_tile_content'
                style={{ padding: '.5em .75em .75em .75em', width: '77%' }}
              >
                <p
                  style={{
                    fontSize: '1.25em',
                    color: '#414042',
                    fontWeight: '400',
                    lineHeight: '1.3em'
                  }}
                  class='mosaic__tile__title'
                >
                  Listen to Jamie Dimon’s Letter to Shareholders
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
