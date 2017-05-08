
// import ReactDOM from 'react-dom';
import PixelComponent from 'components/PixelComponent';
import AppStyles from './App.css';
import bootstrap from './bootstrap.css'
// import React3 from 'react-three-renderer';
var React = require('react');
import _ from 'lodash';



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
			slices: [
				{ id: 1 },
				{ id: 2 },
				{ id: 3 },
				{ id: 4 },
				{ id: 5 }
			],
			rows: [1, 2, 3, 4, 5],
			textChunks: [
				{id: 1,text: 'All'},

				{id: 2,text: 'Work'
				},

				{id: 3,text: 'No Play'
				},

				{id: 4,text: 'Make Jack'
				},

				{id: 5,text: 'a Dull boy'
				}
			],
			randText: ''
		}
	}


	onClickOpen() {
		document.getElementById("mySidenav").style.left = "0px";
	}

	onClickClose() {
		document.getElementById("mySidenav").style.left = "-250px";
	}

	onClickSlice(evt) {
		var textChunks = this.state.textChunks;
		var currentSlice = EventTarget;
		alert('Message', textChunks, '!!!');
	}

	randomise_Chunks() {

		var textChunks = this.state.textChunks;
		var randomise_Values = _.sample(textChunks);

		for (i = 0; i < textChunks.length; i++) {
			randomise_Values += textChunks[i];
			textChunks.splice(textChunks.length, 0, randomise_Values);
		}

		this.setState()
		{
			textChunks : textChunks
		}

	}



	render() {
		var slices = this.state.slices;
		var rows = this.state.rows;
		var textChunks = this.state.textChunks;
		var cloneChunks = _.clone(textChunks);
		var randomise_Values = _.sample(textChunks);
		var randText = this.state.randText;

		console.log(randText);

		return (
			<div className={AppStyles.container}>
				<h1>FracPicasso</h1>
				({this.state.rows.map((rows, index) => (
					<div className={bootstrap.row}>
						({this.state.slices.map((slices) => (
							<div key={slices.id} className={AppStyles.imgSlice} onClick={this.onClickSlice}>
									{this.state.textChunks.map((textChunks) => (
									<div key={textChunks.id}>
										<p>{randomise_Values.text}</p>
									</div>
								))}
							</div>
						))}
					</div>
				))}
			</div>
		)
	}
}