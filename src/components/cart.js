import React, { Component } from 'react';
import Options from './options';
import Total from './total'
import './cart.css';



export default class Cart extends Component {
  render() {
    return (
      <section className="main__summary">
        <h3>Your Cart</h3>
          < Options selected={this.props.selected} />
          < Total selected={this.props.selected} />
      </section>
    )
  }
}