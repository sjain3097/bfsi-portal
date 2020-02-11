import React, { Component } from 'react';
import AdTile from './AdTile';

export default class AdsContainer extends Component {
  render() {
    return (
      <div>
        <AdTile
          adTitle='Get access to cash for your business'
          imgUrl='https://sites.chase.com/content/services/structured-image/image.copy.jpg/XCRT/Tile-Secondary/2019/60438_19-289_CFBcampaign_SmTile.jpg'
          imgDirection='left'
          adContent='Be ready for whatever comes your way with a Chase Business Line
        of Credit.'
        />
        <AdTile
          adTitle='Depositing checks is now even easier.'
          imgUrl='https://sites.chase.com/content/services/structured-image/image.copy.jpg/XCRT/Tile-Secondary/2018/Retail/53378_53484_QD_Shot_479x300.jpg'
          imgDirection='right'
          adContent='With the Chase Mobile® app, an image of your check is snapped automatically.'
        />
        <AdTile
          adTitle='Pick. Click. Chase Pay'
          imgUrl='https://sites.chase.com/content/services/structured-image/image.copy.jpg/XCRT/Tile-Secondary/2019/IC19-480_ChasePayECOM_FNL_60218.jpg'
          imgDirection='left'
          adContent='Shop online or in apps with Chase Pay. It’s the quick and secure way to check out.'
        />
      </div>
    );
  }
}
