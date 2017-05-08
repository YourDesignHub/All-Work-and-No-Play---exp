
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

			slices: 16,
			rows: 4

		}
	}

	onClickOpen() {
		document.getElementById("mySidenav").style.left = "0px";
	}

	onClickClose() {
		document.getElementById("mySidenav").style.left = "-250px";
	}

	onClickSlice(){
		document.getElementById("mySidenav").style.left = "-250px";

	}



	render() {

	var slices = this.state.slices;
	var rows = this.state.rows;
		return <div className={AppStyles.container}>
			<h1>FracPicasso</h1>
				<div className={AppStyles.img}>

					<div className={bootstrap.row}>
						<div className={AppStyles.imgSlice}></div>
						<div className={AppStyles.imgSlice}></div>
						<div className={AppStyles.imgSlice}></div>
						<div className={AppStyles.imgSlice}></div>
					</div>

						<div className={bootstrap.row}>
						<div className={AppStyles.imgSlice}></div>
						<div className={AppStyles.imgSlice}></div>
						<div className={AppStyles.imgSlice}></div>
						<div className={AppStyles.imgSlice}></div>
					</div>

					<div className={bootstrap.row}>
						<div className={AppStyles.imgSlice} onClick={this.onClickSlice}></div>
						<div className={AppStyles.imgSlice}></div>
						<div className={AppStyles.imgSlice}></div>
						<div className={AppStyles.imgSlice}></div>
					</div>

							<div className={bootstrap.row}>
						<div className={AppStyles.imgSlice}></div>
						<div className={AppStyles.imgSlice}></div>
						<div className={AppStyles.imgSlice}></div>
						<div className={AppStyles.imgSlice}></div>
					</div>


			</div>
		</div>
	}
}


