import React, { Component } from 'react'
import Catalogue from './Catalogue'

const Item = (props) => (
  <main>
    {props.items.map((el) => (
      <Catalogue key={el.id} item={el} onAdd={props.onAdd} />
    ))}
  </main>
);
export default Item