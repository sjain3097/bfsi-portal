import React from 'react';
const AdTile = ({ adTitle, imgUrl, imgDirection, adContent }) => {
  return (
    <div className='ad_tile'>
      <div className='ad_inner_tile'>
        <div className='ad_title_container '>
          <p className='ad_title'>{adTitle}</p>
        </div>
        <div
          class='ad_img_container'
          style={{
            float: imgDirection
          }}
        >
          <img src={imgUrl} alt='' />
        </div>
        <div class=''>
          <div class=''>
            <div class='ad_content'>
              <p>{adContent}</p>
            </div>
            <div class=''>
              <div>
                <p class='btn btn-success btn-lg' style={{ color: 'white' }}>
                  Learn more
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdTile;
