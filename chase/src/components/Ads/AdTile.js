import React from 'react';
const AdTile = ({ adTitle, imgUrl, imgDirection, adContent }) => {
  return (
    <div className='ad-outer-container'>
      <div className='ad-container'>
        <div className='ad-title'>
          <p>{adTitle}</p>
        </div>
        <div className='ad-image' style={{ float: imgDirection }}>
          <img src={imgUrl} />
        </div>
        <div className='ad-content'>
          <p>{adContent}</p>
        </div>
        <div>
          <p class='btn btn-success btn-lg' style={{ color: 'white' }}>
            Learn more
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdTile;
