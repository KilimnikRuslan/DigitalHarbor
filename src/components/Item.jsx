import React, { Component } from 'react'
import Catalogue from './Catalogue'

export class Item extends Component {
  render() {
    return (
      <main>
        {this.props.items.map(el =>(
          <Catalogue key={el.id} item={el} onAdd={this.props.onAdd} />
        ))}
      </main>
    )
  }
}

export default Item