import React, { Component } from "react";
import Sidebar from "./Sidebar";
import { connect } from "react-redux";
import { openNav } from "../../actions/SidebarActions";
import PropTypes from "prop-types";
class Header extends Component {
  state = {};
  render() {
    return (
      // <div className='backgroung-img '>
      //   <div>
      //     <header>
      //       <div class='header-area '>
      //         <div id='sticky-header' class='main-header-area'>
      //           <div class='container-fluid '>
      //             <div class='header_bottom_border'>
      //               <div class='row align-items-center'>
      //                 <div class='col-xl-3 col-lg-2'>
      //                   <div class='logo'>
      //                     <a className='btn'>
      //                       <i
      //                         className='fa fa-bars fa-2x '
      //                         aria-hidden='true'
      //                         onClick={this.props.openNav}
      //                         style={{ color: "white" }}
      //                       ></i>
      //                     </a>
      //                   </div>
      //                 </div>
      //                 <div class='col-xl-6 col-lg-7'>
      //                   <div class='main-menu  d-none d-lg-block'>
      //                     <nav>
      //                       <ul id='navigation'>
      //                         <li>
      //                           <a href='index.html'>home</a>
      //                         </li>
      //                         <li>
      //                           <a href='Loan.html'>Loan</a>
      //                         </li>
      //                         <li>
      //                           <a href='about.html'>about</a>
      //                         </li>
      //                         <li>
      //                           <a href='#'>
      //                             pages <i class='ti-angle-down'></i>
      //                           </a>
      //                           <ul class='submenu'>
      //                             <li>
      //                               <a href='apply.html'>apply loan</a>
      //                             </li>
      //                             <li>
      //                               <a href='elements.html'>elements</a>
      //                             </li>
      //                           </ul>
      //                         </li>
      //                         <li>
      //                           <a href='#'>
      //                             blog <i class='ti-angle-down'></i>
      //                           </a>
      //                           <ul class='submenu'>
      //                             <li>
      //                               <a href='blog.html'>blog</a>
      //                             </li>
      //                             <li>
      //                               <a href='single-blog.html'>single-blog</a>
      //                             </li>
      //                           </ul>
      //                         </li>
      //                         <li>
      //                           <a href='FAQ.html'>FAQ</a>
      //                         </li>
      //                         <li>
      //                           <a href='contact.html'>Contact</a>
      //                         </li>
      //                       </ul>
      //                     </nav>
      //                   </div>
      //                 </div>
      //                 <div class='col-xl-3 col-lg-3 d-none d-lg-block'>
      //                   <div class='Appointment'>
      //                     <div class='d-none d-lg-block sign-in-btn-container'>
      //                       <a
      //                         class='btn btn-outline-light btn-primary btn-lg mb-2 mr-5'
      //                         href='apply.html'
      //                       >
      //                         Sign in
      //                       </a>
      //                     </div>
      //                     <div class='d-none d-lg-block sign-in-btn-container'>
      //                       <a href=''>
      //                         <i
      //                           className='fa fa-search fa-lg'
      //                           aria-hidden='true'
      //                           style={{ color: "white" }}
      //                         ></i>
      //                       </a>
      //                     </div>
      //                   </div>
      //                 </div>
      //                 <div class='col-12'>
      //                   <div class='mobile_menu d-block d-lg-none'></div>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </header>
      //   </div>
      <div className='backgroung-img '>
        <header className='header row'>
          <div className='col'>
            <a className='btn'>
              <i
                className='fa fa-bars fa-2x '
                aria-hidden='true'
                onClick={this.props.openNav}
                style={{ color: "white" }}
              ></i>
            </a>
          </div>
          <div className='title-text col'>CHASE</div>
          <div className='col-sm'>
            <a href='index.html'>
              <img className='logo' src='chase_logo.png' />
            </a>
          </div>
          <div className='track-link col'>
            <a className='track-link' href=''>
              ATM & branch
            </a>
          </div>
          <div className='sign-in-btn-container ml-4 col'>
            <a
              className='btn btn-outline-light btn-primary btn-lg mb-2 mr-5'
              href='signIn.html'
            >
              Sign in
            </a>
          </div>
          <div className='col'>
            <a href=''>
              <i
                className='fa fa-search fa-lg'
                aria-hidden='true'
                style={{ color: "white" }}
              ></i>
            </a>
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
