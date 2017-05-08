import React, { Component } from 'react';
import _ from 'lodash';


export default class PixelComponent extends Component {
    constructor ( props ){
        super( props );

        _.each( Object.getOwnPropertyNames(Object.getPrototypeOf( this )), ( name ) => {
            if( name.indexOf('on') == 0 && this[name] && typeof this[name].bind == 'function' ){
                this[name] = this[name].bind( this );
            } 
        });

    }
}