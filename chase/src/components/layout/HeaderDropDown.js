import React, { Component } from 'react';

const HeaderDropDown = ({ subTitle, Icon, link }) => (
	<span className=''>
		<a href={'link'} className='track__link'>
			<p
				className='icon'
				style={{ height: '80px', width: '123px', color: 'white' }}
			>
				<Icon style={{ transform: 'scale(0.3)' }} />
			</p>

			<p className='drop_down_link'>{subTitle}</p>
		</a>
	</span>
);

export default HeaderDropDown;
