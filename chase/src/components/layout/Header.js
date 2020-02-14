import React, { Component } from 'react';
import Sidebar from './Sidebar';
import { connect } from 'react-redux';
import { openNav } from '../../actions/SidebarActions';
import PropTypes from 'prop-types';
import {
  showHeaderDropDown,
  hideHeaderDropDown
} from '../../actions/HeaderActions';
class Header extends Component {
  state = {
    headerColor: this.props.color
  };

  render() {
    return (
      // background image at the start
      <header>
        <div
          className='container-fluid'
          className='header'
          style={{
            'background-color': this.props.color
          }}
        >
          {/* left header block */}
          <div className='row'>
            <div className=' col-4 col-md-4 '>
              <div className='row'>
                <div className='col-6 col-md-4 '>
                  <a className='btn'>
                    <i
                      className='fa fa-bars fa-2x '
                      aria-hidden='true'
                      onClick={this.props.openNav}
                      style={{ color: 'white' }}
                    ></i>
                  </a>
                </div>
                <div
                  className='col-md-8 d-s-block d-xs-block'
                  onMouseOver={this.props.showHeaderDropDown}
                  onMouseOut={this.props.hideHeaderDropDown}
                >
                  <a className='track_link' href='#'>
                    Open an account<i class='fa fa-chevron-down'></i>
                  </a>
                </div>
              </div>
            </div>

            {/* CENTER HEADER BLOCK */}
            <div className='col-5 col-md-4 '>
              <div className='row'>
                <div className='col-7 col-md-7 ' style={{ textAlign: 'right' }}>
                  <div
                    className='title'
                    style={{
                      'margin-left': this.props.titleMargin,
                      opacity: this.props.titleOpacity
                    }}
                  >
                    <img className='chase_text' src='chase_text_white.png' />
                  </div>
                </div>
                <div className='col-2 col-md-5 '>
                  <span className='logo-container'>
                    <a href='index.html'>
                      <img className='logo' src='hexa_white.png' />
                    </a>
                  </span>
                </div>
              </div>
            </div>

            {/* right header block */}
            <div className='col-3 col-md-4 '>
              <div
                style={{
                  // float: 'right',
                  display: 'inline-block',
                  width: '100%',
                  textAlign: 'right'
                }}
              >
                <div className='row'>
                  <div className='col-md-4 d-s-block d-xs-block'>
                    <a className='track_link' href=''>
                      ATM & branch
                    </a>
                  </div>
                  <div className='col-md-3 d-s-block d-xs-block'>
                    <a className='track_link' href=''>
                      Español
                    </a>
                  </div>
                  <div className='column-ipad '>
                    <a className='sign_in button' href=''>
                      Sign in
                    </a>
                  </div>
                  <div className='col-md-2 d-xs-block'>
                    <a href=''>
                      <i
                        className='fa fa-search fa-lg'
                        aria-hidden='true'
                        style={{ color: 'white' }}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
Header.propTypes = {
  openNav: PropTypes.func.isRequired
};
const mapStateToProps = state => {
  return {
    titleMargin: state.header.titleMargin,
    titleOpacity: state.header.titleOpacity
  };
};
export default connect(mapStateToProps, {
  openNav,
  showHeaderDropDown,
  hideHeaderDropDown
})(Header);
