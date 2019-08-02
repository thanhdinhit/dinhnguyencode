import React from 'react';

function Product(props) {

  return (
    <div className="prop">
      <h1>{props.name}</h1>
      <p>{props.price}</p>
    </div>
  );
}

export default Product;