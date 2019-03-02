import React, { Component } from 'react';

import { withTracker } from 'meteor/react-meteor-data';
 
import { retos } from '../api/retos.js';

import Reto from './Reto.js';

class Retos extends Component {
     
      renderRetos() {
        return this.props.retos.map((reto) => (
          <Reto key={reto._id} reto={reto} />
        ));
      }
     
      render() {
        return (
          <div className="container">
          <br/><br/><br/><br/><br/><br/><br/><br/><br/>
              <h1>Lista de retos</h1>
     
            <ul>
              {this.renderRetos()}
            </ul>
          </div>
        );
      }
}

export default withTracker(() => {
    return {
      retos: retos.find({}).fetch(),
    };
  })(Retos);