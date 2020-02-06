import React, { Component } from 'react';

export default class MosaicTile extends Component {
  render() {
    console.log(this.props.imgUrl);
    return (
      <div className='mosaic_tile'>
        <a href='#'>
          <img className='mosaic_img' src={this.props.imgUrl} />
        </a>
        {/* dfgdfg */}
      </div>
    );
  }
}
