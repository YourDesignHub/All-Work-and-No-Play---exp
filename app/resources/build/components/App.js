import React from 'react';
import PixelComponent from 'components/PixelComponent';
import AppStyles from './App.css';
import bootstrap from './bootstrap.css'


export default class App extends PixelComponent{
	constructor( props ){
		super( props );

		this.state = {
			apps : [
				{
					title: 'Resource Manager',
					url : 'http://localhost:4000/Resources'
				},
				{
					title: 'Tron Pong',
					url : 'http://localhost:8000/'
				},

				{
					title: 'Animation Test JQuery',
					url :'../testiFrame/animate.html'
				}
			],
			appSelected : null
		}
	}

	onClickOpen(){
		document.getElementById("mySidenav").style.left = "0px";
	}

	onClickClose(){
  		document.getElementById("mySidenav").style.left = "-250px";
	}

	render(){
		var apps = this.state.apps;

		return <div classNameName={AppStyles.container}>
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

        </div>
      </div>
	}
}