import React from 'react'
import Footer from './components/Footer'
import Item  from './components/Item'
import Header from './components/Header'
import Categories from './components/Categories'

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        { 
          id: 1,
          title: 'Xiaomi',
          img:  'xiomi.jpg',
          desc:  'lorem ipsum',
          category: 'phone',
          price: '600',
        },
        { 
          id: 2,
          title: 'Lenovo',
          img:  'lenovo.png',
          desc:  'lorem ipsum',
          category: 'Laptop',
          price: '1000',
        },
        { 
          id: 3,
          title: 'Lg',
          img:  'lg.jpg',
          desc:  'lorem ipsum',
          category: 'TV',
          price: '670',
        },
        { 
          id: 4,
          title: 'samsung',
          img:  'samsung.jpg',
          desc:  'lorem ipsum',
          category: 'phone',
          price: '1000',
        },
        { 
          id: 5,
          title: 'Ergo',
          img:  'ergo.jpg',
          desc:  'lorem ipsum',
          category: 'TV',
          price: '720',
        },
        { 
          id: 6,
          title: 'Bravis',
          img:  'bravis.jpg',
          desc:  'lorem ipsum',
          category: 'TV',
          price: '450',
        },
        { 
          id: 7,
          title: 'Acer',
          img:  'acer.jpg',
          desc:  'lorem ipsum',
          category: 'Laptop',
          price: '1199',
        },
        { 
          id: 8,
          title: 'oppo',
          img:  'oppo.jpg',
          desc:  'lorem ipsum',
          category: 'phone',
          price: '580',
        },
        { 
          id: 9,
          title: 'Asus',
          img:  'asus.png',
          desc:  'lorem ipsum',
          category: 'Laptop',
          price: '740',
        },
      ]
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }
  render() {
  return (
    <div className="wraper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
      <Categories chooseCategory={this.chooseCategory}/>
      <Item  items={this.state.currentItems} onAdd={this.addToOrder} />
      <Footer/>
    </div>
   )
  }


chooseCategory(category) {
  if (category === 'all') {
    this.setState({ currentItems: this.state.items });
    return;
  }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({
      orders: this.state.orders.filter(el => el.id !== id)});
  }


  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
      isInArray = true
    })
    if (!isInArray)
    this.setState({orders: [...this.state.orders, item] })
  }
}

export default App
