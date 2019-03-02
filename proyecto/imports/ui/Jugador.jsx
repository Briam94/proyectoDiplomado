import React, { Component } from 'react';

import { jugadores } from '../api/jugadores.js';
 
// Jugador component - represents a single todo item
export default class Jugador extends Component {

  toggleChecked() {
    // Set the checked property to the opposite of its current value
    jugadores.update(this.props.jugador._id, {
      $set: { checked: !this.props.jugador.checked },
    });
  }
 
  deleteThisJugador() {
    jugadores.remove(this.props.jugador._id);
  }
 

  render() {

    const jugadorClassName = this.props.jugador.checked ? 'checked' : '';

    return (

      <li className={jugadorClassName}>
        <button className="delete" onClick={this.deleteThisJugador.bind(this)}>
          &times;
        </button>
 
        <input
          type="checkbox"
          readOnly
          checked={!!this.props.jugador.checked}
          onClick={this.toggleChecked.bind(this)}
        />
 
        <span className="text">
          {this.props.jugador.text} - Puntos: { this.props.jugador.number }
        </span>
      </li>


      //<li> {this.props.jugador.text} - Puntos: { this.props.jugador.number }</li>
    );
  }
}