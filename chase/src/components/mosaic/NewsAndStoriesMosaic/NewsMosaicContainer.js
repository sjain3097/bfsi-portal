import React, { Component } from 'react';
import NewsMosaicTile from './NewsMosaicTile';
import FollowUs from '../../layout/FollowUs';
const newsAndStories = [
  {
    imgUrl:
      'https://chase.com/content/dam/chasecom/en/newsroom/images/primary/081119-promo-ar-ceo-letters-audio-hero.png/_jcr_content/renditions/cq5dam.web.461.259.png',
    content: 'Listen to Jamie Dimon’s Letter to Shareholders'
  },
  {
    imgUrl:
      'https://chase.com/content/dam/chasecom/en/newsroom/images/primary/041219-home-renovation-roundup_hero.png/_jcr_content/renditions/cq5dam.web.461.259.png',
    content: 'What you need to know about home repairs'
  },
  {
    imgUrl:
      'https://chase.com/content/dam/chasecom/en/newsroom/images/primary/082819-day-trips_hero.jpg/_jcr_content/renditions/cq5dam.web.461.259.jpeg',
    content: '5 easy (and affordable!) day trips to take right now'
  },
  {
    imgUrl:
      'https://chase.com/content/dam/chasecom/en/newsroom/images/primary/100217-single-by-choice_hero.jpg/_jcr_content/renditions/cq5dam.web.461.259.jpeg',
    content: "I'm a single Latina, and CFO of my own life"
  },
  {
    imgUrl:
      'https://chase.com/content/dam/chasecom/en/newsroom/images/primary/010819-foods-future-trends_hero.png/_jcr_content/renditions/cq5dam.web.461.259.png',
    content: 'Foods of the future: 5 trends to watch in 2019'
  },
  {
    imgUrl:
      'https://chase.com/content/dam/chasecom/en/newsroom/images/primary/111318-holiday-shopping-guide_hero.png/_jcr_content/renditions/cq5dam.web.461.259.png',
    content: "Chase's guide to mastering your holiday shopping"
  },
  {
    imgUrl:
      'https://chase.com/content/dam/chasecom/en/newsroom/images/primary/041919-tips-save-on-wellness_hero.png/_jcr_content/renditions/cq5dam.web.461.259.png',
    content: 'Save more on wellness with tips from fiscal, fitness pros'
  },
  {
    imgUrl:
      'https://chase.com/content/dam/chasecom/en/newsroom/images/primary/073119-living-single_hero.png/_jcr_content/renditions/cq5dam.web.461.259.png',
    content: "Saving tips for when you're single"
  },
  {
    imgUrl:
      'https://chase.com/content/dam/chasecom/en/newsroom/images/primary/103118-philadelphia_hero.png/_jcr_content/renditions/cq5dam.web.461.259.png',
    content: 'Sapphire Six travel guide: Philadelphia 2019'
  },
  {
    imgUrl:
      'https://chase.com/content/dam/chasecom/en/newsroom/images/primary/073119-up-your-finances_hero.png/_jcr_content/renditions/cq5dam.web.461.259.png',
    content: 'In your 30s? Time to start thinking long-term'
  },
  {
    imgUrl:
      'https://chase.com/content/dam/chasecom/en/newsroom/images/primary/082819-our-next-tailgate_hero.jpg/_jcr_content/renditions/cq5dam.web.461.259.jpeg',
    content: 'Ready for game day? Try these tips to save'
  },
  {
    imgUrl:
      'https://chase.com/content/dam/chasecom/en/newsroom/images/primary/052918-elder-financial-abuse_hero.jpg/_jcr_content/renditions/cq5dam.web.461.259.jpeg',
    content: '5 ways to prevent—and handle—elder financial abuse'
  }
];
export default class NewsMosaicContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsAndStoriesList: newsAndStories,
      followUs: [
        'fa fa-facebook-f mosaic__follow-us_item',
        'fa fa-instagram mosaic__follow-us_item',
        'fa fa-twitter mosaic__follow-us_item',
        'fa fa-youtube  mosaic__follow-us_item',
        'fa fa-linkedin mosaic__follow-us_item',
        'fa fa-pinterest mosaic__follow-us_item'
      ]
    };
  }
  render() {
    return (
      <div className='container-fluid mosaic-b'>
        <div className='mosaic-b__container'>
          {/* start of mosaic heading */}
          <div className='row'>
            <div className='mosaic-b_heading col-md-6'>News & Stories</div>
            <div className='mosaic__follow-us col-md-6'>
              Follow us:
              {this.state.followUs.map(c => (
                // console.log(c)
                <FollowUs c={c} />
              ))}
            </div>
          </div>
          {/* end of mosaic heading */}
          {/* start of mosaic tile */}
          <div className='row'>
            {this.state.newsAndStoriesList.map(newsAndStory => (
              <NewsMosaicTile
                imgUrl={newsAndStory.imgUrl}
                content={newsAndStory.content}
              />
            ))}
          </div>
          {/* end of mosaic tile */}
          <div className='mosaic-b_cta'>
            <a
              href=''
              className='mosaic-b_caret_link'
              style={{
                textDecoration: 'none'
              }}
            >
              Show me more <i class='fa fa-angle-right'></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
