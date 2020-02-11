import React, { Component } from 'react';
import NewsMosaicTile from './NewsMosaicTile';

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
          {/* start of mosaic tile */}
          <div className='row'>
            <NewsMosaicTile
              imgUrl='https://chase.com/content/dam/chasecom/en/newsroom/images/primary/081119-promo-ar-ceo-letters-audio-hero.png/_jcr_content/renditions/cq5dam.web.461.259.png'
              content='Listen to Jamie Dimon’s Letter to Shareholders'
            />
            <NewsMosaicTile
              imgUrl='https://chase.com/content/dam/chasecom/en/newsroom/images/primary/041219-home-renovation-roundup_hero.png/_jcr_content/renditions/cq5dam.web.461.259.png'
              content='What you need to know about home repairs'
            />
            <NewsMosaicTile
              imgUrl='https://chase.com/content/dam/chasecom/en/newsroom/images/primary/082819-day-trips_hero.jpg/_jcr_content/renditions/cq5dam.web.461.259.jpeg'
              content='5 easy (and affordable!) day trips to take right now'
            />
            <NewsMosaicTile
              imgUrl='https://chase.com/content/dam/chasecom/en/newsroom/images/primary/100217-single-by-choice_hero.jpg/_jcr_content/renditions/cq5dam.web.461.259.jpeg'
              content="I'm a single Latina, and CFO of my own life"
            />
            <NewsMosaicTile
              imgUrl='https://chase.com/content/dam/chasecom/en/newsroom/images/primary/010819-foods-future-trends_hero.png/_jcr_content/renditions/cq5dam.web.461.259.png'
              content='Foods of the future: 5 trends to watch in 2019'
            />
            <NewsMosaicTile
              imgUrl='https://chase.com/content/dam/chasecom/en/newsroom/images/primary/111318-holiday-shopping-guide_hero.png/_jcr_content/renditions/cq5dam.web.461.259.png'
              content="Chase's guide to mastering your holiday shopping"
            />
            <NewsMosaicTile
              imgUrl='https://chase.com/content/dam/chasecom/en/newsroom/images/primary/041919-tips-save-on-wellness_hero.png/_jcr_content/renditions/cq5dam.web.461.259.png'
              content='Save more on wellness with tips from fiscal, fitness pros'
            />
            <NewsMosaicTile
              imgUrl='https://chase.com/content/dam/chasecom/en/newsroom/images/primary/073119-living-single_hero.png/_jcr_content/renditions/cq5dam.web.461.259.png'
              content="Saving tips for when you're single"
            />
            <NewsMosaicTile
              imgUrl='https://chase.com/content/dam/chasecom/en/newsroom/images/primary/103118-philadelphia_hero.png/_jcr_content/renditions/cq5dam.web.461.259.png'
              content='Sapphire Six travel guide: Philadelphia 2019'
            />
            <NewsMosaicTile
              imgUrl='https://chase.com/content/dam/chasecom/en/newsroom/images/primary/073119-up-your-finances_hero.png/_jcr_content/renditions/cq5dam.web.461.259.png'
              content='In your 30s? Time to start thinking long-term'
            />
            <NewsMosaicTile
              imgUrl='https://chase.com/content/dam/chasecom/en/newsroom/images/primary/082819-our-next-tailgate_hero.jpg/_jcr_content/renditions/cq5dam.web.461.259.jpeg'
              content='Ready for game day? Try these tips to save'
            />
            <NewsMosaicTile
              imgUrl='https://chase.com/content/dam/chasecom/en/newsroom/images/primary/052918-elder-financial-abuse_hero.jpg/_jcr_content/renditions/cq5dam.web.461.259.jpeg'
              content='5 ways to prevent—and handle—elder financial abuse'
            />
          </div>
          {/* end of mosaic tile */}
        </div>
      </div>
    );
  }
}
