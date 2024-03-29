import {React } from 'react'

const Catalogue = (props) => {
  return (
    <div className="item">
      <img src={`/img/${props.item.img}`} alt={props.item.title} />
      <h2>{props.item.title}</h2>
      <p>{props.item.desc}</p>
      <b>{`${props.item.price}$`}</b>
      <div className="add-to-card" onClick={() => props.onAdd(props.item)}>
        +
      </div>
    </div>
  );
};

export default Catalogue;