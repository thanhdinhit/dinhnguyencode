import React from 'react';


class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [5, 6, 7, 8],
      products : [
        {
          id: 1,
          name: 'moduleA',
          price: 500

        },
        {
          id: 2,
          name: 'moduleB',
          price: 700

        },
        {
          id: 3,
          name: 'moduleC',
          price: 900

        }
      ]
    };
  }

  render() {
    const logList = this.state.list.map((item) => item);
    console.log(logList);
    return (
      <div>
        <h1>Test List</h1>
        <h1>{this.state.list.map(item => <p key={item}>item:{item}</p>)}</h1>
        <br/>
        <h1>{this.state.products.map(product => 
          <li key={product.id}>Name: {product.name} - - - Price: {product.price} $ </li>)}
          {/* <li key={product.id}>Name: {product.name} - - - Price: {product.price} $ </li>)} */}
        </h1>

      </div>
    );
  }
}

export default List;

