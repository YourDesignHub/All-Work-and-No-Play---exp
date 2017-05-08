
// import ReactDOM from 'react-dom';
import PixelComponent from 'components/PixelComponent';
import AppStyles from './App.css';
import bootstrap from './bootstrap.css'
// import React3 from 'react-three-renderer';
var React = require('react');



export default class App extends PixelComponent {
	constructor(props) {
		super(props);


		this.state = {
			apps: [
				{
					title: 'Resource Manager',
					url: 'http://localhost:4000/Resources'
				},
			],
			appSelected: null,
			slices: [1,2,3,4],
			rows: [1,2,3,4]
		}
	}


	onClickOpen() {
		document.getElementById("mySidenav").style.left = "0px";
	}

	onClickClose() {
		document.getElementById("mySidenav").style.left = "-250px";
	}

	onClickSlice() {
		document.getElementById("mySidenav").style.left = "-250px";

	}

	render() {

		var slices = this.state.slices;
		var rows = this.state.rows;

		return (
			<div className={AppStyles.container}>
			<h1>FracPicasso</h1>
				
				<div className={AppStyles.img}>
					({this.state.rows.map((rows, index) => (
						<div className={bootstrap.row}>
						({this.state.slices.map((slices, index) => (
						<div className={AppStyles.imgSlice}/>	
						))}
					</div>
					))}
				</div>
			</div>
		)}
}