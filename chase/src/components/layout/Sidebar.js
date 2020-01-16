import React, { Component } from 'react';
class Sidebar extends Component {
  state = {
    sidebarWidth: '0%'
  };
  openNav = () => {
    this.setState({ sidebarWidth: '20%' });
  };

  closeNav = () => {
    this.setState({ sidebarWidth: '0%' });
  };
  render() {
    return (
      <div>
        <div
          id='myNav'
          className='overlay'
          style={{
            width: this.state.sidebarWidth
          }}
        >
          <a
            href='javascript:void(0)'
            className='closebtn'
            onClick={this.closeNav}
          >
            &times;
          </a>
          <div class='overlay-content'>
            <a href='#'>About</a>
            <a href='#'>Services</a>
            <a href='#'>Clients</a>
            <a href='#'>Contact</a>
          </div>
        </div>
        <button
          onClick={this.openNav}
          style={{
            'font-size': '30px',
            cursor: 'pointer'
          }}
        >
          open
        </button>
      </div>
    );
  }
}

export default Sidebar;
