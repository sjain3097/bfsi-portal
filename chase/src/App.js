import React, { Component } from 'react';
import Header from './components/layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Sidebar from './components/layout/Sidebar';
class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Sidebar />
        <Header />
      </div>
    );
  }
}

export default App;
