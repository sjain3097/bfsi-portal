import React from 'react';
import MoneyCheck from '../../../svgs/money-check.svg';
import PiggyBank from '../../../svgs/piggy-bank.svg';
import PrepaidCard from '../../../svgs/prepaid-card.svg';
import CreditCard from '../../../svgs/credit-card.svg';
import Home from '../../../svgs/home.svg';
import Brush from '../../../svgs/brush.svg';
import Car from '../../../svgs/car-side.svg';
import Invest from '../../../svgs/invest.svg';
import PrivateClients from '../../../svgs/private-clients.svg';
import Briefcase from '../../../svgs/briefcase.svg';
import About from '../../../svgs/about.svg';
import Sport from '../../../svgs/sport.svg';

import FooterTile from './FooterTile';
const FooterTiles = () => {
  return (
    <div className='footer--tiles'>
      <div className='row'>
        {/* start of footer tile */}

        {/* Tile1 */}
        <div className='footer--tile col-6 col-sm-4  col-md-2'>
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
              offers for new customers. Make purchases with your debit card, and
              bank from almost anywhere with your phone, tablet or computer and
              at our&nbsp;16,000 ATMs and&nbsp;nearly 4,900 branches nationwide.
            </p>
          </div>
        </div>

        {/* Tile2 */}
        <div className='footer--tile col-6 col-sm-4 col-md-2'>
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
              Certificate of Deposit accounts are FDIC insured up to the maximum
              amount allowed by law.
            </p>
          </div>
        </div>

        {/* Tile3 */}
        <div className='footer--tile col-6 col-sm-4 col-md-2'>
          <FooterTile Icon={PrepaidCard} heading='Prepaid Card' />
          <div className='footer--tile-content'>
            <p className='footer--tile-content'>
              The{' '}
              <a
                class='chaseanalytics-track-link regular-link '
                data-pt-name='rb_lnk_footer-starbucks'
                href='https://www.chase.com/personal/debit-reloadable-cards/starbucks'
              >
                Starbucks<sup>®</sup> Rewards Visa<sup>®</sup> Prepaid Card
              </a>{' '}
              is the only reloadable prepaid card that allows you to earn Stars
              everywhere you shop, with no monthly, annual or reload fees. Other
              fees may apply.
            </p>
          </div>
        </div>

        {/* Tile4 */}
        <div className='footer--tile col-6 col-sm-4 col-md-2'>
          <FooterTile Icon={CreditCard} heading='Credit Cards' />
          <div className='footer--tile-content'>
            <p className='footer--tile-content'>
              Choose from our Chase{' '}
              <a
                class='chaseanalytics-track-link regular-link '
                data-pt-name='seo_creditcard_home'
                href='https://creditcards.chase.com/'
              >
                credit cards
              </a>{' '}
              to help you buy what you need. Many{' '}
              <a
                class='chaseanalytics-track-link regular-link '
                href='https://www.chase.com/personal/credit-cards/education/rewards-benefits/what-are-travel-rewards-cards'
                data-pt-name='seo_cc_rewards'
              >
                offer rewards
              </a>{' '}
              that can be redeemed for{' '}
              <a
                class='chaseanalytics-track-link regular-link '
                data-pt-name='seo_cc_cashback'
                href='https://creditcards.chase.com/credit-cards/cash-back'
                data-accessible-text=' credit cards'
              >
                cash back
                <span class='accessible-text'> credit cards</span>
              </a>
              , or for rewards at companies like Disney, Marriott, Hyatt, United
              or Southwest Airlines. We can help you find the{' '}
              <a
                class='chaseanalytics-track-link regular-link '
                data-pt-name='seo_creditcard_home'
                href='https://creditcards.chase.com/'
              >
                credit card
              </a>{' '}
              that matches your lifestyle. Plus, get your{' '}
              <a
                class='chaseanalytics-track-link regular-link '
                data-pt-name='seo_creditcard_score'
                href='https://creditcards.chase.com/free-credit-score'
              >
                free credit score
              </a>
              !
            </p>
          </div>
        </div>

        {/* Tile5 */}
        <div className='footer--tile col-6 col-sm-4 col-md-2'>
          <FooterTile Icon={Home} heading='Mortgages' />
          <div className='footer--tile-content'>
            <p className='footer--tile-content'>
              Get a{' '}
              <a
                href='/personal/mortgage/mortgage-purchase'
                class='chaseanalytics-track-link regular-link '
                data-pt-name='fm_seomortgage'
              >
                mortgage
              </a>
              &nbsp;or{' '}
              <a
                data-pt-name='fm_seorefinance'
                href='/personal/mortgage/mortgage-refinance'
                class='chaseanalytics-track-link regular-link '
              >
                refinance
              </a>{' '}
              your home with Chase. See today's{' '}
              <a
                data-pt-name='fm_seomortgagerates'
                href='/personal/mortgage/mortgage-rates'
                class='chaseanalytics-track-link regular-link '
              >
                mortgage rates
              </a>
              ,&nbsp;figure out what you can afford with our{' '}
              <a
                data-pt-name='fm_seomortgagecalc'
                href='/personal/mortgage/calculators-resources'
                class='chaseanalytics-track-link regular-link '
              >
                mortgage calculator
              </a>
              &nbsp;before{' '}
              <a
                class='chaseanalytics-track-link regular-link '
                data-pt-name='seo_mort_app'
                href='https://secure.chase.com/web/oao/application/retail#/origination;cfgCode=502002/index/index'
              >
                applying for a mortgage
              </a>
              .
            </p>
          </div>
        </div>

        {/* Tile6 */}
        <div className='footer--tile col-6 col-sm-4 col-md-2'>
          <FooterTile Icon={Brush} heading='Home Equity Line of Credit' />
          <div className='footer--tile-content'>
            <p className='footer--tile-content'>
              You might be able to use a portion of your home's value to spruce
              it up or pay other bills with a{' '}
              <a
                data-pt-name='fm_seohomeequity'
                class='chaseanalytics-track-link regular-link '
                href='/personal/home-equity'
              >
                Home Equity Line of Credit
              </a>
              . To find out if you may be eligible for a HELOC, use our{' '}
              <a
                data-pt-name='fm_seohomeequitycalc'
                class='chaseanalytics-track-link regular-link '
                href='/personal/home-equity/home-equity-line-of-credit-calculator'
              >
                HELOC calculator
              </a>
              &nbsp;and other resources&nbsp;
              <a
                class='chaseanalytics-track-link regular-link '
                data-pt-name='fm_seo_he_apply'
                href='/personal/home-equity/about-home-equity/check-eligibility'
                data-accessible-text=' for a home equity line of credit'
              >
                before you apply
                <span class='accessible-text'>
                  {' '}
                  for a home equity line of credit
                </span>
              </a>
              .
            </p>
          </div>
        </div>

        {/* Tile7 */}
        <div className='footer--tile col-6 col-sm-4 col-md-2'>
          <FooterTile Icon={Car} heading='Car Buying &nbsp; Loans' />
          <div className='footer--tile-content'>
            <p className='footer--tile-content'>
              <a
                class='chaseanalytics-track-link regular-link '
                data-pt-name='seo_auto_cap'
                href='https://www.chase.com/personal/auto-loans/phoenix?offercode=WDPAXXXX07'
              >
                Chase Auto
              </a>
              &nbsp;is here to help you get the right car. Apply for an{' '}
              <a
                class='chaseanalytics-track-link regular-link '
                data-pt-name='seo_auto_loan'
                href='https://autofinance.chase.com/auto-finance/auto-loans?offercode=WDXDPXXX02'
              >
                auto loan
              </a>{' '}
              for a new or used car or{' '}
              <a
                class='chaseanalytics-track-link regular-link '
                data-pt-name='seo_auto_refinance'
                href='https://autofinance.chase.com/auto-finance/auto-refinance?offercode=WDXDPXXX02'
              >
                refinance
              </a>{' '}
              your existing car loan with Chase. Use the{' '}
              <a
                class='chaseanalytics-track-link regular-link '
                data-pt-name='seo_auto_paycalc'
                href='https://autofinance.chase.com/auto-finance/auto-refinance/payment-calculator?offercode=WDXDPXXX02'
              >
                payment calculator
              </a>{' '}
              to estimate monthly payments.
            </p>
          </div>
        </div>

        {/* Tile 8*/}
        <div className='footer--tile col-6 col-sm-4 col-md-2'>
          <FooterTile Icon={Invest} heading='Planning & Investments' />
          <div className='footer--tile-content'>
            <p className='footer--tile-content'>
              Whether you choose to work with a{' '}
              <a
                href='https://www.chase.com/personal/investments/advisor'
                class='chaseanalytics-track-link regular-link '
                data-pt-name='fm_seofinancialadvisor'
              >
                financial advisor
              </a>
              &nbsp;and develop a financial strategy or{' '}
              <a
                class='chaseanalytics-track-link regular-link '
                data-pt-name='fm_seoinvestonline'
                href='https://www.chase.com/personal/investments/you-invest'
              >
                invest online
              </a>
              , J.P. Morgan offers insights, expertise and tools to help you
              reach your goals.&nbsp;Check here for latest You Invest
              <sup>SM</sup>{' '}
              <a
                class='chaseanalytics-track-link regular-link '
                data-pt-name='fm_youinvestoffers'
                href='https://accounts.chase.com/consumer/investing/online/youinvestoffer'
              >
                offers, promotions, and coupons
              </a>
              .
            </p>
            <p
              className='footer--tile-content'
              className='footer--tile-content'
            >
              <strong>
                INVESTMENT AND INSURANCE PRODUCTS ARE:&nbsp;• NOT FDIC
                INSURED&nbsp;• NOT INSURED BY ANY FEDERAL GOVERNMENT
                AGENCY&nbsp;&nbsp;• NOT A DEPOSIT OR OTHER OBLIGATION OF, OR
                GUARANTEED BY, JPMORGAN CHASE BANK, N.A. OR ANY OF ITS
                AFFILIATES&nbsp;• SUBJECT TO INVESTMENT RISKS, INCLUDING
                POSSIBLE LOSS OF THE PRINCIPAL AMOUNT INVESTED
              </strong>
            </p>
          </div>
        </div>

        {/* Tile9 */}
        <div className='footer--tile col-6 col-sm-4 col-md-2'>
          <FooterTile Icon={PrivateClients} heading='Chase Private Client' />
          <div className='footer--tile-content'>
            <p className='footer--tile-content'>
              Ask us about{' '}
              <a
                href='https://chaseprivateclient.chase.com'
                data-pt-name='fm_seoprivateclient'
                class='chaseanalytics-track-link regular-link '
              >
                Chase Private Client
              </a>
              , a unique level of service that combines{' '}
              <a
                href='https://chaseprivateclient.chase.com/banking'
                data-pt-name='fm_seoconceirge'
                class='chaseanalytics-track-link regular-link '
              >
                concierge banking
              </a>{' '}
              from Chase and access to J.P. Morgan’s investment expertise.
            </p>
            <p className='footer--tile-content'>
              <strong>
                INVESTMENT AND INSURANCE PRODUCTS ARE: • NOT A DEPOSIT • NOT
                FDIC INSURED • NOT INSURED BY ANY FEDERAL GOVERNMENT AGENCY • NO
                BANK GUARANTEE • MAY LOSE VALUE
              </strong>
            </p>
          </div>
        </div>

        {/* Tile10 */}
        <div className='footer--tile  col-6 col-sm-4 col-md-2'>
          <FooterTile Icon={Briefcase} heading='Business Banking' />
          <div className='footer--tile-content'>
            <p className='footer--tile-content'>
              With{' '}
              <a
                class='chaseanalytics-track-link '
                data-pt-name='fm_seo_business'
                href='/business'
              >
                Business Banking
              </a>
              , you’ll receive guidance from a team of business professionals
              who specialize in helping improve cash flow, providing credit
              solutions, and on managing payroll. Chase also offers online and
              mobile services,{' '}
              <a
                data-pt-name='ftr-lnk-bizcc'
                class='chaseanalytics-track-link regular-link '
                href='https://www.chase.com/business'
              >
                business credit cards
              </a>
              , and payment acceptance solutions built specifically for
              businesses.
            </p>
          </div>
        </div>

        {/* Tile11 */}
        <div className='footer--tile col-6 col-sm-4 col-md-2'>
          <FooterTile Icon={About} heading='About Chase' />
          <div className='footer--tile-content'>
            <p className='footer--tile-content'>
              Chase Bank serves nearly half of U.S. households with a broad
              range of products.{' '}
              <a
                class='chaseanalytics-track-link regular-link '
                data-pt-name='lnk_chase_online'
                href='https://www.chase.com'
              >
                Chase online
              </a>{' '}
              lets you manage your Chase accounts, view statements, monitor
              activity, pay bills or transfer funds securely from one central
              place. If you have questions or concerns, please contact us
              through{' '}
              <a
                class='chaseanalytics-track-link regular-link '
                data-pt-name='lnk_customerserv'
                href='https://www.chase.com/digital/resources/customer-service'
              >
                Chase customer service
              </a>{' '}
              or let us know about{' '}
              <a
                data-pt-name='fm_complaints'
                href='https://www.chase.com/digital/resources/complaints-feedback'
                class='chaseanalytics-track-link regular-link '
              >
                Chase complaints and feedback
              </a>
              .
            </p>
          </div>
        </div>
        {/* Tile12 */}
        <div className='footer--tile col-6 col-sm-4 col-md-2'>
          <FooterTile Icon={Sport} heading='Sports & Entertainment' />
          <div className='footer--tile-content'>
            <p className='footer--tile-content'>
              Chase gives you access to unique sports, entertainment and
              culinary events through{' '}
              <a
                data-pt-name='lnk_seo_footer_experiences'
                href='https://www.chase.com/personal/credit-cards/experiences'
                class='chaseanalytics-track-link regular-link '
              >
                Chase Experiences
              </a>{' '}
              and our exclusive partnerships such as the{' '}
              <a
                data-accessible-text=' partnership information'
                data-pt-name='lnk_seo_footer_usopen'
                href='https://www.chase.com/digital/us-open.html'
                class='chaseanalytics-track-link regular-link '
              >
                US Open
                <span class='accessible-text'> partnership information</span>
              </a>
              ,{' '}
              <a
                data-pt-name='lnk_seo_footer_msg'
                href='https://www.msg.com/'
                target='_blank'
                class='chaseanalytics-track-link regular-link '
                rel='noopener'
              >
                Madison Square Garden
                <span class='accessible-text'>(Opens Overlay)</span>
              </a>{' '}
              and{' '}
              <a
                class='chaseanalytics-track-link regular-link '
                href='https://www.chasecenter.com/chase'
                data-pt-name='lnk_seo_footer_chase-ctr'
              >
                Chase Center
                <span class='accessible-text'>(Opens Overlay)</span>
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTiles;
