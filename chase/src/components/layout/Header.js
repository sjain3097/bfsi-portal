import React, { Component } from 'react';
import Sidebar from './Sidebar';

class Header extends Component {
  state = {};
  render() {
    return (
      <header className='header'>
        <div>
          <a className='btn'>
            <i
              className='fa fa-bars fa-2x '
              aria-hidden='true'
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
      // <header className='header'>
      //   <div className='header-area '>
      //     <div id='sticky-header' className='main-header-area sticky'>
      //       <div className='container-fluid '>
      //         <div className='header_bottom_border'>
      //           <div className='row align-items-center'>
      //             <a className='btn'>
      //               <i
      //                 className='fa fa-bars fa-lg pt-4'
      //                 aria-hidden='true'
      //                 style={{ color: 'white' }}
      //               ></i>
      //             </a>

      //             <div className='logo'>
      //               <a href='index.html'>
      //                 <img src='img/logo.png' alt='' />
      //               </a>
      //             </div>
      //           </div>
      //           <div className='col-xl-6 col-lg-7'>
      //             <div className=''>
      //               <nav>
      //                 <div className=''>
      //                   <span className='title-text pt-5'>CHASE</span>
      //                   <img className='logo mb-3' src='chase_logo.png' />
      //                 </div>
      //               </nav>
      //             </div>
      //           </div>
      //           <div className='col-xl-3 col-lg-3 d-none d-lg-block'>
      //             <div className='Appointment'>
      //               <div className='phone_num d-none d-xl-block'>
      //                 <a href='#'>
      //                   <i></i> ATM & branch
      //                 </a>
      //               </div>
      //               <div className='d-none d-lg-block'>
      //                 <a
      //                   className='btn btn-outline-light btn-primary my-2 mr-5'
      //                   href='signIn.html'
      //                 >
      //                   Sign in
      //                 </a>
      //                 <i
      //                   className='fa fa-search fa-lg'
      //                   aria-hidden='true'
      //                   style={{ color: 'white' }}
      //                 ></i>
      //               </div>
      //             </div>
      //           </div>
      //           <div className='col-12'>
      //             <div className='mobile_menu d-block d-lg-none'></div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </header>
    );
  }
}

export default Header;
