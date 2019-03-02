import React, { Component } from 'react';

import { withTracker } from 'meteor/react-meteor-data';
 
import { jugadores } from '../api/jugadores.js';

import Jugador from './Jugador.jsx';

import ReactDOM from 'react-dom';
 
// App component - represents the whole app
 class App extends Component {

  handleSubmit(event) {
    event.preventDefault();
 
    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    const number = ReactDOM.findDOMNode(this.refs.number).value.trim();
 
    jugadores.insert({
      text,
      number,
      createdAt: new Date(), // current time
    });
 
    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }
 

  /*getJugadors() {
    return [
      { _id: 1, text: 'jugador 1' },
      { _id: 2, text: 'jugador 2' },
      { _id: 3, text: 'jugador 3' },
      { _id: 4, text: 'jugador 4' },
    ];
  }
 

  renderJugadors() {
    return this.getJugadors().map((jugador) => (
      <Jugador key={jugador._id} jugador={jugador} />
    ));
  }
 */

  renderJugadors() {
    return this.props.jugadores.map((jugador) => (
      <Jugador key={jugador._id} jugador={jugador} />
    ));
  }


  render() {
    return (
      
      <div className="container">
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <h1>LISTA Y REGISTRO DE JUGADORES</h1>
          <form className="nuevo-jugador" onSubmit={this.handleSubmit.bind(this)} >
            <input
              type="text"
              ref="textInput"
              placeholder="jugador #"
            />

            <input
              type="number"
              ref="number"
              placeholder="puntos iniciales"
            />

            <button type="submit">Agregar</button>
          </form>
          <hr/>
          <br/><br/>

 
        <ul>
          {this.renderJugadors()}
        </ul>
      </div>
    );
  }
  
}

export default withTracker(() => {
  return {
    jugadores: jugadores.find({}, { sort: { createdAt: -1 } }).fetch(),
  };
})(App)
