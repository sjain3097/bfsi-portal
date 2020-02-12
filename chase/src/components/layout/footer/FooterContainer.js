import React, { Component } from 'react';
import FollowUs from '../FollowUs';
import MoneyCheck from '../../../svgs/money-check.svg';
import PiggyBank from '../../../svgs/piggy-bank.svg';
import FooterTile from './FooterTile';
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
      ],

      footerTiles: [
        {
          icon: MoneyCheck,
          heading: 'Checking Accounts'
        }
      ]
    };
  }
  render() {
    return (
      <div className='footer' style={{ marginTop: '5%' }}>
        <div className='footer_section'>
          {/* start of FollowUs section */}
          <div className='footer_follow-us'>
            Follow us:
            {this.state.followUs.map(c => (
              <FollowUs c={c} />
            ))}
            <FollowUs />
          </div>
          {/* end of Follow us section */}
          {/* start of footer header section */}
          <div className='footer--header'>
            <p class='footer--header--text'>
              We're here to help you manage your money today and tomorrow
            </p>
          </div>
          {/* end of footer header section */}
          {/* start of footer tiles section */}
          {/* {this.state.footerTiles.map(footerTile => (
            <FooterTile Icon={footerTile.icon} content={footerTile.heading} />
          ))} */}
          <div className='footer--tiles'>
            <div className='row'>
              {/* start of footer tile */}
              <div className='footer--tile col-md-2'>
                <FooterTile Icon={MoneyCheck} heading='Checking Accounts' />
                <div className='footer--tile-content'>
                  <p className='footer--tile-content'>
                    Choose the{' '}
                    <a
                      href='https://personal.chase.com/personal/checking'
                      class='chaseanalytics-track-link regular-link '
                    >
                      checking account
                    </a>{' '}
                    that works best for you.&nbsp;See{' '}
                    <a
                      class='chaseanalytics-track-link regular-link '
                      href='https://www.chase.com/personal/checking/chase-checking-coupon'
                    >
                      Chase Premier Plus Checking
                    </a>{' '}
                    and other{' '}
                    <a
                      class='chaseanalytics-track-link regular-link '
                      href='https://www.chase.com/personal/checking/chase-coupon'
                    >
                      Chase Coupon
                    </a>{' '}
                    offers for new customers. Make purchases with your debit
                    card, and bank from almost anywhere with your phone, tablet
                    or computer and at our&nbsp;16,000 ATMs and&nbsp;nearly
                    4,900 branches nationwide.
                  </p>
                </div>
              </div>
              <div className='footer--tile col-md-2'>
                <FooterTile Icon={PiggyBank} heading='Savings Accounts & CDs' />
                <div className='footer--tile-content'>
                  <p className='footer--tile-content'>
                    It’s never too early to begin saving.{' '}
                    <a
                      class='chaseanalytics-track-link regular-link '
                      href='https://www.chase.com/personal/savings'
                      data-pt-name='fm_seosavings'
                    >
                      Open a savings account
                    </a>{' '}
                    or open a Certificate of Deposit (
                    <a
                      class='chaseanalytics-track-link regular-link '
                      href='https://www.chase.com/personal/savings/bank-cd'
                      data-pt-name='fm_seocd'
                    >
                      see interest rates
                    </a>
                    ) and start saving your money.&nbsp;Savings accounts and
                    Certificate of Deposit accounts are FDIC insured up to the
                    maximum amount allowed by law.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <FooterTile iconUrl='money-check.svg' /> */}

          {/* end of footer tile */}
        </div>
      </div>
    );
  }
}
