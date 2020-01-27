import React, { Component } from 'react';
import { ReactComponent as MoneyCheck } from '../../svgs/money-check.svg';
import { ReactComponent as PiggyBank } from '../../svgs/piggy-bank.svg';
import { ReactComponent as Car } from '../../svgs/car-side.svg';
import { ReactComponent as Wallet } from '../../svgs/wallet.svg';
import { ReactComponent as Home } from '../../svgs/home.svg';
import { ReactComponent as Briefcase } from '../../svgs/briefcase.svg';
import { ReactComponent as City } from '../../svgs/city.svg';
import { ReactComponent as More } from '../../svgs/more.svg';
import { ReactComponent as CreditCard } from '../../svgs/credit-card.svg';
import HeaderDropDownElement from './HeaderDropDownElement';
import { connect } from 'react-redux';
import {
  hideHeaderDropDown,
  showHeaderDropDown
} from '../../actions/HeaderActions';
import { PropTypes } from 'prop-types';
class HeaderDropDown extends Component {
  render() {
    console.log(this.props.headerColor);
    return (
      <div
        className='container-fluid'
        className={this.props.headerDropDown}
        onMouseOver={this.props.showHeaderDropDown}
        onMouseOut={this.props.hideHeaderDropDown}
        style={{
          width: '100%',
          height: '200px',
          'background-color': this.props.headerColor,
          transition: 'background-color 1s ',
          position: 'fixed'
        }}
      >
        <div
          className='container'
          style={{
            display: 'grid',
            'grid-template-columns': 'repeat(9, 1.2fr)',
            //'background-color': 'green',
            height: '150px'
          }}
        >
          <HeaderDropDownElement subTitle='Credit Card' Icon={CreditCard} />
          <HeaderDropDownElement
            subTitle='Checking Accounts'
            Icon={MoneyCheck}
          />
          <HeaderDropDownElement subTitle='Savings Accounts' Icon={PiggyBank} />
          <HeaderDropDownElement subTitle='CDs' Icon={Wallet} />
          <HeaderDropDownElement subTitle='Car buying & Loans' Icon={Car} />
          <HeaderDropDownElement subTitle='Mortage & Home Equity' Icon={Home} />
          <HeaderDropDownElement
            subTitle='Chase for Business'
            Icon={Briefcase}
          />
          <HeaderDropDownElement subTitle='Commercial Banking' Icon={City} />
          <HeaderDropDownElement subTitle='See all' Icon={More} />
        </div>
      </div>
    );
  }
}
HeaderDropDown.propTypes = {
  headerDropDown: PropTypes.string.isRequired,
  headerColor: PropTypes.string.isRequired
};
const mapStateToProps = state => {
  return {
    headerDropDown: state.header.headerDropDown,
    headerColor: state.header.headerColor
  };
};
export default connect(mapStateToProps, {
  hideHeaderDropDown,
  showHeaderDropDown
})(HeaderDropDown);
