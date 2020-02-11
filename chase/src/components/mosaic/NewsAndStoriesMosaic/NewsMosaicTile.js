import React from 'react';
const NewsMosaicTile = ({ imgUrl, content }) => {
  return (
    <div className=' col-6 col-sm-4 col-md-3'>
      <a href='' style={{ textDecoration: 'none' }}>
        <div>
          <img style={{ width: '106%' }} src={imgUrl} />
        </div>
        <div
          className='mosaic-b_tile_content'
          style={{ padding: '.5em .75em .75em .75em', width: '95%' }}
        >
          <p
            style={{
              fontSize: '1.25em',
              color: '#414042',
              fontWeight: '400',
              lineHeight: '1.3em'
            }}
            class='mosaic__tile__title'
          >
            {content}
          </p>
        </div>
      </a>
    </div>
  );
};

export default NewsMosaicTile;
