import React, { Component } from 'react';
import MosaicTile from './MosaicTile';
export default class MosaicContainer extends Component {
  render() {
    return (
      <div className='mosaic_container'>
        <MosaicTile imgUrl='https://sites.chase.com/content/services/structured-image/image.desktop.jpg/XCRT/Flexible-Templates/Triplets/2019/Auto/51263IconTriplet_Desktop_384x280.jpg' />
        <MosaicTile imgUrl='https://sites.chase.com/content/services/structured-image/image.desktop.jpg/XCRT/Flexible-Templates/Triplets/2019/HomeLending/61006_HL_Default_Triplet_Desktop_1.jpg' />
        <MosaicTile imgUrl='https://sites.chase.com/content/services/structured-image/image.desktop.jpg/XCRT/Flexible-Templates/Triplets/2019/Card/A52134_IC19-267_Consumer_Multi_Triplet_DT.jpg' />
      </div>
    );
  }
}
