import React, { Component } from 'react';
import Sidebar from './Sidebar';
import { connect } from 'react-redux';
import { openNav } from '../../actions/SidebarActions';
import PropTypes from 'prop-types';
class Header extends Component {
  state = {
    headerDropDown: 'd_block_drop_down'
  };

  hideHeaderDropDown = e => {
    this.setState({ headerDropDown: 'd_block_drop_down' });
  };
  showHeaderDropDown = e => {
    this.setState({ headerDropDown: '' });
  };
  render() {
    return (
      <div className='backgroung-img'>
        <header className='header'>
          <div
            className='container-fluid'
            style={{
              'background-color': this.props.color,
              transition: 'background-color 1s ease-out'
            }}
          >
            <div className='row'>
              {/* LEFT */}
              <div
                className='col-4 col-sm-4 col-md-4'
                // style={{ 'background-color': 'orange' }}
              >
                <div className='row'>
                  <div
                    className='col-2 col-sm-2 col-md-4'
                    // style={{ 'background-color': 'green' }}
                  >
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
                    className='col-6 col-sm-6 col-md-6'
                    onMouseOver={this.showHeaderDropDown}
                    onMouseOut={this.hideHeaderDropDown}
                    className='dropdown-title'
                    style={{
                      'margin-left': 'auto',
                      'margin-right': '0px',
                      'margin-right': '33%'
                    }}
                  >
                    <a id='track_link' className='track__link d_block' href=''>
                      Open an account<i class='fa fa-chevron-down'></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* CENTER */}
              <div
                className='col-4 col-sm-4 col-md-4'
                // style={{ 'background-color': 'green' }}
              >
                <div className='row'>
                  <div
                    className='col-6 col-sm-6 col-md-6'
                    style={{
                      // 'background-color': 'orange',
                      'margin-left': 'auto',
                      'text-align': 'right',
                      padding: '0 4px 0 0'
                    }}
                  >
                    {/* <span className='title-text'>CHASE</span> */}
                    <span>
                      <img className='chase_text' src='chase_text_white.png' />
                    </span>
                  </div>
                  <div
                    className='col-2 col-sm-2 col-md-2'
                    style={{
                      // 'background-color': 'red',
                      'margin-right': 'auto',
                      'text-align': 'left',
                      padding: '0 0 0 4px'
                    }}
                  >
                    <span>
                      <a href='index.html'>
                        <img className='logo' src='hexa_white.png' />
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div
                className='col-4 col-sm-4 col-md-4'
                style={{
                  // 'background-color': 'blue',
                  'text-align': 'center'
                }}
              >
                <div className='row'>
                  <div
                    className=' col-md-5 '
                    className='d_block'
                    style={
                      {
                        // 'background-color': 'orange'
                        //'margin-left': '33%'
                      }
                    }
                  >
                    <a className='track__link' href=''>
                      ATM & branch
                    </a>
                  </div>
                  <div
                    className=' col-md-3 d_block'
                    style={
                      {
                        // 'background-color': 'orange'
                        // 'margin-left': '33%'
                      }
                    }
                  >
                    <a className='track__link' href=''>
                      Español
                    </a>
                  </div>
                  <div
                    className=' col-md-3point shift_right'
                    // style={{ 'background-color': 'orange' }}
                  >
                    <a className='button' href='signIn.html'>
                      Sign in
                    </a>
                  </div>
                  <div
                    className='col-md-1'
                    // style={{ 'background-color': 'red' }}
                  >
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
            <div
              className='container-fluid'
              className={this.state.headerDropDown}
              onMouseOver={this.showHeaderDropDown}
              onMouseOut={this.hideHeaderDropDown}
              style={{
                'max-width': '100%',
                'background-color': this.props.color,
                transition: 'background-color 1s ease-out',
                left: 0
              }}
            >
              <div
                className='row'
                style={{
                  'background-color': 'orange',
                  width: '1168px',
                  height: '108.878px',
                  margin: '0px 0px 20px 110px'
                }}
              ></div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
Header.propTypes = {
  openNav: PropTypes.func.isRequired
};
export default connect(null, { openNav })(Header);
