import { React } from 'react'

const Categories = (props) => {
    const categories = [
      {
        key: 'all',
        name: 'все',
      },
      {
        key: 'phone',
        name: 'смартфони',
      },
      {
        key: 'Laptop',
        name: 'ноутбуки',
      },
      {
        key: 'TV',
        name: 'телевізори',
      },
    ];
  
    return (
      <div className='categories'>
        {categories.map((el) => (
          <div key={el.key} onClick={() => props.chooseCategory(el.key)}>
            {el.name}
          </div>
        ))}
      </div>
    );
  };
  
  export default Categories;