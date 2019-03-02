import React, { Component } from 'react';
 
// Task component - represents a single todo item
export default class Reto extends Component {
  render() {
    
    return (
      
      <li>{this.props.reto.text} Reta a: {this.props.reto.text} </li>
    );
  }
}