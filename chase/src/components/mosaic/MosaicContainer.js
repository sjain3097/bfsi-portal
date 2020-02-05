import React, { Component } from 'react';
import MosaicTile from './MosaicTile';
export default class MosaicContainer extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center', margin: 'auto' }}>
        <div className='row' style={{ width: '70%' }}>
          <MosaicTile />
          <MosaicTile />
          <MosaicTile />
        </div>
      </div>
    );
  }
}
