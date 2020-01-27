import React, { Component } from 'react';

const HeaderDropDownElement = ({ subTitle, Icon, link }) => (
  <span className=''>
    <a href={'link'} className='track__link'>
      <p
        className='col '
        style={{
          height: '45px',
          width: '123px',
          color: 'white',
          textAlign: 'center'
        }}
      >
        <Icon style={{ transform: 'scale(0.4)' }} />
      </p>

      <p className='drop_down_link'>{subTitle}</p>
    </a>
  </span>
);

export default HeaderDropDownElement;
