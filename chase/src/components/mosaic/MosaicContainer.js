import React, { Component } from 'react';
import MosaicTile from './MosaicTile';
export default class MosaicContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      desktop: [
        'https://sites.chase.com/content/services/structured-image/image.desktop.jpg/XCRT/Flexible-Templates/Triplets/2019/Auto/51263IconTriplet_Desktop_384x280.jpg',

        'https://sites.chase.com/content/services/structured-image/image.desktop.jpg/XCRT/Flexible-Templates/Triplets/2019/HomeLending/61006_HL_Default_Triplet_Desktop_1.jpg',
        'https://sites.chase.com/content/services/structured-image/image.desktop.jpg/XCRT/Flexible-Templates/Triplets/2019/Card/A52134_IC19-267_Consumer_Multi_Triplet_DT.jpg'
      ],
      tablet: [
        'https://sites.chase.com/content/services/structured-image/image.tablet.jpg/XCRT/Flexible-Templates/Triplets/2019/Card/IC19-980_frdm_unl_trip_dt_New.jpg',
        'https://sites.chase.com/content/services/structured-image/image.tablet.jpg/XCRT/Flexible-Templates/Triplets/2019/HomeLending/61006_HL_Default_Triplet_Desktop_1.jpg',
        'https://sites.chase.com/content/services/structured-image/image.tablet.jpg/XCRT/Flexible-Templates/Triplets/2019/Auto/51263IconTriplet_Desktop_384x280.jpg'
      ],
      imgList: []
    };
  }
  updateDimensions() {
    let imgList = [];
    var width = window.innerWidth;

    if (479 > width && width > 780) {
      imgList = this.state.desktop;
    } else if (781 >= width && width >= 480) {
      imgList = this.state.tablet;
    } else {
      imgList = this.state.desktop;
    }
    this.setState({ imgList });
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }
  render() {
    // console.log(imgList);
    let imgList = [];
    return (
      <div className='mosaic-a_container'>
        <div className='mosaic-a_grid-container'>
          {this.state.imgList.map(img => (
            <div className='mosaic-a-tile-3'>
              <MosaicTile imgUrl={img} />{' '}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
