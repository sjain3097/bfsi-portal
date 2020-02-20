import React from 'react';
const ImageSlide = ({ Icon, subtitle, hide, id, level }) => (
  <div
    className={'item level' + level}
    style={
      {
        // transition:
        //   'transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955),visibility 0s, opacity 0.5s linear',
        // transform: `translate3d(-${transition}%, 0px, 0px)`
      }
    }
  >
    <div
      className={hide}
      className='carousel_item'
      // className='border'
    >
      <img id='slider' src={Icon} />
      <p
        className={``}
        style={{
          color: '#126BC5',
          fontWeight: '600',
          width: '70%',
          textAlign: 'center',
          'line-height': '1.333em'
        }}
      >
        {subtitle}
      </p>
    </div>
  </div>
);
export default ImageSlide;
