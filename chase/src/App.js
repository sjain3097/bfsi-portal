import React, { Component } from 'react';
import Header from './components/layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Sidebar from './components/layout/Sidebar';
import Carousel from './components/carousel/Carousel';
// import Trial from './components/transitions/trial';
class App extends Component {
	state = { headerColor: 'rgba(0, 0, 0, 0.7)' };
	listenScrollEvent = e => {
		if (window.scrollY > 384) {
			this.setState({ headerColor: 'rgba(8,70,168,0.9)' });
		} else {
			this.setState({ headerColor: 'rgba(0, 0, 0, 0.7)' });
		}
		//console.log(this.state);
	};

	componentDidMount = () => {
		window.addEventListener('scroll', this.listenScrollEvent);
	};
	render() {
		return (
			<div style={{ height: '2000px' }}>
				<Sidebar />
				<Header color={this.state.headerColor} />
				<Carousel />
				{/* <Trial /> */}
			</div>
		);
	}
}

export default App;
