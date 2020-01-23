import React, { Component } from 'react';
import Sidebar from './Sidebar';
import { connect } from 'react-redux';
import { openNav } from '../../actions/SidebarActions';
import PropTypes from 'prop-types';
import { ReactComponent as MoneyCheck } from '../../svgs/money-check.svg';
import { ReactComponent as PiggyBank } from '../../svgs/piggy-bank.svg';
import { ReactComponent as Car } from '../../svgs/car-side.svg';
import { ReactComponent as Wallet } from '../../svgs/wallet.svg';
import { ReactComponent as Home } from '../../svgs/home.svg';
import { ReactComponent as Briefcase } from '../../svgs/briefcase.svg';
import { ReactComponent as City } from '../../svgs/city.svg';
import { ReactComponent as More } from '../../svgs/more.svg';
import { ReactComponent as CreditCard } from '../../svgs/credit-card.svg';
import HeaderDropDown from './HeaderDropDown';
class Header extends Component {
	state = {
		headerDropDown: 'd_block_drop_down',
	};

	hideHeaderDropDown = e => {
		this.setState({ headerDropDown: 'd_block_drop_down' });
	};
	showHeaderDropDown = e => {
		this.setState({ headerDropDown: '' });
	};
	render() {
		return (
			<div className='backgroung-img'>
				<header className='header'>
					<div
						className='container-fluid'
						style={{
							'background-color': this.props.color,
							transition: 'background-color 1s ease-out',
							zIndex: 3,
						}}
					>
						<div className='row'>
							{/* LEFT */}
							<div
								className='col-4 col-sm-4 col-md-4'
								// style={{ 'background-color': 'orange' }}
							>
								<div className='row'>
									<div
										className='col-2 col-sm-2 col-md-4'
										// style={{ 'background-color': 'green' }}
									>
										<a className='btn'>
											<i
												className='fa fa-bars fa-2x '
												aria-hidden='true'
												onClick={this.props.openNav}
												style={{ color: 'white' }}
											></i>
										</a>
									</div>
									<div
										className='col-6 col-sm-6 col-md-6'
										onMouseOver={this.showHeaderDropDown}
										onMouseOut={this.hideHeaderDropDown}
										className='dropdown-title'
										style={{
											'margin-left': 'auto',
											'margin-right': '33%',
											transition: 'all 0s ease 0s',
										}}
									>
										<a id='track_link' className='track__link d_block' href=''>
											Open an account<i class='fa fa-chevron-down'></i>
										</a>
									</div>
								</div>
							</div>

							{/* CENTER */}
							<div
								className='col-4 col-sm-4 col-md-4'
								// style={{ 'background-color': 'green' }}
							>
								<div className='row'>
									<div
										className='col-6 col-sm-6 col-md-6'
										style={{
											// 'background-color': 'orange',
											'margin-left': 'auto',
											'text-align': 'right',
											padding: '0 4px 0 0',
										}}
									>
										{/* <span className='title-text'>CHASE</span> */}
										<span>
											<img className='chase_text' src='chase_text_white.png' />
										</span>
									</div>
									<div
										className='col-2 col-sm-2 col-md-2'
										style={{
											// 'background-color': 'red',
											'margin-right': 'auto',
											'text-align': 'left',
											padding: '0 0 0 4px',
										}}
									>
										<span>
											<a href='index.html'>
												<img className='logo' src='hexa_white.png' />
											</a>
										</span>
									</div>
								</div>
							</div>

							{/* RIGHT */}
							<div
								className='col-4 col-sm-4 col-md-4'
								style={{
									// 'background-color': 'blue',
									'text-align': 'center',
								}}
							>
								<div className='row'>
									<div
										className=' col-md-5 '
										className='d_block'
										style={
											{
												// 'background-color': 'orange'
												//'margin-left': '33%'
											}
										}
									>
										<a className='track__link' href=''>
											ATM & branch
										</a>
									</div>
									<div
										className=' col-md-3 d_block'
										style={
											{
												// 'background-color': 'orange'
												// 'margin-left': '33%'
											}
										}
									>
										<a className='track__link' href=''>
											Español
										</a>
									</div>
									<div
										className=' col-md-3point shift_right'
										// style={{ 'background-color': 'orange' }}
									>
										<a className='button' href='signIn.html'>
											Sign in
										</a>
									</div>
									<div
										className='col-md-1'
										// style={{ 'background-color': 'red' }}
									>
										<a href=''>
											<i
												className='fa fa-search fa-lg'
												aria-hidden='true'
												style={{ color: 'white' }}
											></i>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div
							className='container-fluid'
							className={this.state.headerDropDown}
							onMouseOver={this.showHeaderDropDown}
							onMouseOut={this.hideHeaderDropDown}
							style={{
								'max-width': '100%',
								height: '200px',
								//'background-color': this.props.color,
								transition: 'background-color 1s ',
								left: 0,
							}}
						>
							<div
								className='container'
								style={{
									display: 'grid',
									'grid-template-columns': 'repeat(9, 1.2fr)',
									//'background-color': 'green',
									height: '150px',
								}}
							>
								<HeaderDropDown subTitle='Credit Card' Icon={CreditCard} />
								<HeaderDropDown
									subTitle='Checking Accounts'
									Icon={MoneyCheck}
								/>
								<HeaderDropDown subTitle='Savings Accounts' Icon={PiggyBank} />
								<HeaderDropDown subTitle='CDs' Icon={Wallet} />
								<HeaderDropDown subTitle='Car buying & Loans' Icon={Car} />
								<HeaderDropDown subTitle='Mortage & Home Equity' Icon={Home} />
								<HeaderDropDown
									subTitle='Chase for Business'
									Icon={Briefcase}
								/>
								<HeaderDropDown subTitle='Commercial Banking' Icon={City} />
								<HeaderDropDown subTitle='See all' Icon={More} />
							</div>
						</div>
					</div>
				</header>
				<div style={{ height: '90px' }}></div>
				<div
					style={{
						//'background-color': 'red',
						width: '780px',
						height: '232.727px',
						margin: '0 0 15px 50px',
						padding: '0 8px 0 8px',
						display: 'flex',
						right: '420px',
						bottom: '62.2727px',
						top: '90px',
					}}
				>
					<img src='200.png' />
					<div
						className='container '
						style={{
							//'background-color': 'green',
							height: '232px',
							width: '350px',
							display: 'flex',
							'line-height': '18px',
						}}
					>
						<div
							className='row'
							style={{
								left: '20px',
								position: 'relative',
								zIndex: 0,
							}}
						>
							<p
								className='col '
								style={{
									'font-size': '36px',
									'font-weight': '600',
									color: 'white',
									'line-height': '41.4px',
									margin: '0 0 18px 0',
									height: '81px',
									// width: '350px',
								}}
							>
								New Chase customers:
							</p>
							<div class='w-100' style={{ height: '0px' }}></div>
							<p
								className='col '
								style={{
									'font-size': '18px',
									color: 'white',
									'line-height': '23.4px',
									margin: '0 0 18px 0',
									height: '68px',
									width: '350px',
								}}
							>
								Open a Chase Total Checking® and Chase Savings℠ account with
								qualifying activities.
							</p>
							<div class='w-100' style={{ height: '0px' }}></div>
							<p className='col'>
								<a className='open_acc_button' href='#'>
									Open an account{' '}
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
Header.propTypes = {
	openNav: PropTypes.func.isRequired,
};
export default connect(
	null,
	{ openNav },
)(Header);
