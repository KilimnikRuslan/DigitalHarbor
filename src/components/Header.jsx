import React, { useState } from "react";
import { SlBasket } from "react-icons/sl";
import bgImage from '../img/bg.jpg';
import Order from "./Order";

const showOrders = (props) => {
  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.price))
  
  return (<div>
            {props.orders.map(el => (
             <Order onDelete={props.onDelete} key={el.id} item={el}/>
               ))}
               <p className="summa">Сумма: {new Intl.NumberFormat().format(summa)}$</p>
          </div>)
}

const showNothing = () => {
  return (<div className="empty">
    <h2>корзина пуста</h2>
  </div>)
}

const Header = (props) => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className="logo">DigitalHarbor</span>
        <SlBasket onClick={() => setCartOpen(prevCartOpen => !prevCartOpen)} className={`shop-cart ${cartOpen && 'active'}`} />

        {cartOpen && (
          <div className="shop_cart">
              {props.orders.length > 0 ?
                showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation" style={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: '100%', height: '450px' }}></div>
    </header>
  );
};




export default Header;
