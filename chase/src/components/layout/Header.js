import React, { Component } from 'react';
import Sidebar from './Sidebar';
import { connect } from 'react-redux';
import { openNav } from '../../actions/SidebarActions';
import PropTypes from 'prop-types';
class Header extends Component {
  state = {};
  render() {
    return (
      <div className='backgroung-img'>
        <header className='header black-linear'>
          <div>
            <a className='btn'>
              <i
                className='fa fa-bars fa-2x '
                aria-hidden='true'
                onClick={this.props.openNav}
                style={{ color: 'white' }}
              ></i>
            </a>
            <span className='title-text'>CHASE</span>
            <span className='ml-2'>
              <a href='index.html'>
                <img className='logo' src='chase_logo.png' />
              </a>
            </span>
            <span>
              <a className='track-link' href=''>
                ATM & branch
              </a>
            </span>
            <span className='sign-in-btn-container ml-4'>
              <a
                className='btn btn-outline-light btn-primary btn-lg mb-2 mr-5'
                href='signIn.html'
              >
                Sign in
              </a>
            </span>
            <span>
              <a href=''>
                <i
                  className='fa fa-search fa-lg'
                  aria-hidden='true'
                  style={{ color: 'white' }}
                ></i>
              </a>
            </span>
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
