
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
			slices: [
				{ id: 1 },
				{ id: 2 },
				{ id: 3 },
				{ id: 4 },
				{ id: 5 }
			],
			rows: [1, 2, 3, 4, 5],
			textChunks: [
				{ id: 1, text: 'All' },
				{ id: 2, text: 'Work' },
				{ id: 3, text: 'No Play' },
				{ id: 4, text: 'Make Jack' },
				{ id: 5, text: 'a Dull boy' }
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

	onClickChunk(event) {
		var textChunks = this.state.textChunks;
		var currentChunk = event.target.getAttribute('value');
		console.log(currentChunk);
	}

	onClickRefresh(event) {
		var textChunks = this.state.textChunks;
		var randomise_Values = _.sample(textChunks);

		this.setState()
		{
			randText: randText
		}

	}

	onClickClear( event){
		window.location.reload();
	}

	returnRandText() {
		var textChunksNo = textChunks.length;
		var randText = _.sample(textChunks);
		console.log(randText);

		this.setState()
		{
			randText: randText
		}

	}

	rowChange (event){
		// var ArrRowClone = _.clone(rows);
		var rowNum = event.target.getAttribute('data-value');
		// var newRows = _.slice(ArrRowClone,0,rowNum.length);
		console.log('new rows', rowNum);
		// console.log('new rows', newRows);

		// this.setState()
		// {
		// 	newRows: rows
		// }
	}

	render() {
		var slices = this.state.slices;
		var rows = this.state.rows;
		var textChunks = this.state.textChunks;

		var randText = _.sample(textChunks);

		console.log(textChunks);
		console.log(randText);

		return (
			<div className={AppStyles.container}>
				<h1>All Work and No Play</h1>
				{this.state.rows.map((rows, index) => (
					<div className={bootstrap.row}>
						{this.state.slices.map((slices) => (
							<div key={slices.id} className={AppStyles.imgSlice}>
								{this.state.textChunks.map((textChunks) => (
									<div key={textChunks.id} onClick={this.onClickChunk}>
										<p value={randText.text}>{randText.text}</p>
									</div>
								))}
							</div>
						))}
					</div>
				))}
				<div className={AppStyles.containerRight}>

				<div className={bootstrap.row}>
					<h1>Modify Jack's List</h1>
					<button className={AppStyles.button} onClick={this.onClickRefresh}>Refresh</button>
					<button className={AppStyles.button} onClick={this.onClickClear}>Clear Board</button>
				</div>

				<div className={bootstrap.row}>
					<label><h3>Rows:</h3>
						<input type="text" className={AppStyles.input} data-value ={this.state.rows.length} value={this.state.rows.length} onChange={this.rowChange} />
					</label>
					<label><h3>Slices:</h3>
						<input type="text" className={AppStyles.input} value={this.state.slices.length} onChange={this.sliceChange} />
					</label>
						<h2>Jacks Current Mood: {randText.text}</h2>
				</div>
				</div>
			</div>
		)
	}

}