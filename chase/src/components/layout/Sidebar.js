import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openNav, closeNav } from '../../actions/SidebarActions';
import PropTypes from 'prop-types';
class Sidebar extends Component {
  state = {
    sidebarWidth: '0%'
  };
  // openNav = () => {
  //   this.setState({ sidebarWidth: '20%' });
  // };

  // closeNav = () => {
  //   this.setState({ sidebarWidth: '0%' });
  // };
  componentWillReceiveProps = nextProps => {
    if (nextProps.sidebarWidth) {
      this.setState({ sidebarWidth: nextProps.sidebarWidth });
    }
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <div
          id='myNav'
          className='sidebar'
          style={{
            width: this.state.sidebarWidth
          }}
        >
          <a
            href='javascript:void(0)'
            className='closebtn'
            onClick={this.props.closeNav}
          >
            <i className='fa fa-times' aria-hidden='true'></i>
          </a>
          <div class='overlay-content'>
            <ul>
              <li className='sidemenu--link'>
                <a href='#'>Home</a>
              </li>
              <li className='sidemenu--link'>
                <a href='#'>Sign In</a>
              </li>
              <li className='sidemenu--link'>
                <a href='#'>Free Credit Score</a>
              </li>
              <li className='sidemenu--link'>
                <a href='#'>News & Stories</a>
              </li>
            </ul>
          </div>
        </div>
        {/* <button
          onClick={this.props.openNav}
          style={{
            'font-size': '30px',
            cursor: 'pointer'
          }}
        >
          open
        </button> */}
      </div>
    );
  }
}
Sidebar.propTypes = {
  openNav: PropTypes.func.isRequired,
  sidebarWidth: PropTypes.string.isRequired
};
const mapStateToProps = state => {
  console.log(state);
  return {
    sidebarWidth: state.sidebar.sidebarWidth
  };
};
export default connect(mapStateToProps, { openNav, closeNav })(Sidebar);
