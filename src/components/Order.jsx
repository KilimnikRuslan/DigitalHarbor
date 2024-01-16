import { React } from 'react'
import { FaTrash } from "react-icons/fa";


const Order = (props) => (
  <div className='inem'>
    <img src={`/img/${props.item.img}`} alt={props.item.title} />
    <h2>{props.item.title}</h2>
    <b>{`${props.item.price}$`}</b>
    <FaTrash className='delete-icon' onClick={() => props.onDelete(props.item.id)} />
  </div>
);

export default Order