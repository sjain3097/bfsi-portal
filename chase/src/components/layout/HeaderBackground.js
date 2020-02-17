import React, { Component } from 'react';

export default class HeaderBackground extends Component {
  render() {
    const link = { color: 'white', 'text-decoration': 'none' };
    const liStyle = {
      color: 'white',
      float: 'left',
      display: 'inline',
      padding: '0'
      // padding: '0 20px 0 20px'
    };
    return (
      <div>
        <header
          className='header'
          style={{
            backgroundColor: 'rgba(8,70,168,0.9)'
          }}
        >
          <div
            className=' '
            style={{
              margin: 'auto',
              width: '90%'
            }}
          >
            <div className='row border'>
              {/* Right block */}
              <div className='col-2 col-sm-2 col-md-4 '>
                <nav>
                  <ul className='row '>
                    <li className='col-sm-2 col-md-3 '>
                      <a className='btn'>
                        <i
                          className='fa fa-bars fa-2x '
                          aria-hidden='true'
                          onClick={this.props.openNav}
                          style={link}
                        ></i>
                      </a>
                    </li>
                    <li className='col-md-6  d-m-block'>
                      <a style={link} href=''>
                        Open an account<i class='fa fa-chevron-down'></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* Center block */}
              <div className='col-6 col-sm-6 col-md-4 ' style={liStyle}>
                <ul id='branding' className='row'>
                  <li className='col-8 col-sm-8 col-md-6 '>
                    <h1 style={{ float: 'right', color: 'white' }}>CHASE</h1>
                  </li>
                  <li className='col-2 col-sm-2 col-md-2 '>
                    <div style={{ float: 'left' }}>
                      <img
                        className=''
                        style={{
                          width: '70%',
                          height: 'auto',
                          marginTop: '-4%'
                        }}
                        src='hexa_white.png'
                      />
                      {/* x */}
                    </div>
                  </li>
                </ul>
              </div>
              {/* Left block */}
              <div className='col-4 col-sm-4 col-md-4 '>
                {/* <div className='row' style={{ float: 'right' }}> */}
                <nav className=''>
                  <ul className='row '>
                    <li className='col-md-4 d-m-block'>
                      <a style={link} href=''>
                        ATM & Branch
                      </a>
                    </li>
                    <li className='col-md-2 d-m-block'>
                      <a style={link} href=''>
                        Español
                      </a>
                    </li>
                    <li className='col-6 col-sm-6 col-md-4 '>
                      <a className='sign_in button' href=''>
                        Sign in
                      </a>
                    </li>
                    <li className='col-2 col-sm-2 col-md-2 d-s-block'>
                      <a style={link} href=''>
                        <i
                          className='fa fa-search fa-lg'
                          aria-hidden='true'
                          style={link}
                        ></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>

        {/* <section id='showcase'>
          <div className='container'>
            <h1>Professional Web Design</h1>
            <p>
              Open a Chase Total Checking® and Chase Savings℠ account with
              qualifying activities.
            </p>
          </div>
        </section> */}
      </div>
    );
  }
}
