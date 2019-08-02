import React from 'react';
import './Demo.css';

import Product from './Prop/product';

function Demo() {

  var login = false;
  var input;
  var i = 0;
  var employ = {
    id: 15,
    name: 'DinhNguyen',
    age: '25',
    maried: true,
  };
  if (login === true) {
    input = 'say_ok';
  }
  else {
    input = 'say_not_ok';
  }
  //


  return (
    <div className='JSXcss'>
      <h>JSX</h>
      <h1>{i === 1 ? "True" : "False"}</h1>
      <h2>Show infor</h2>
      <h2>id:{employ.id} <br />
        name:{employ.name}<br />
        age:{employ.age}<br />
        status: {employ.maried === true ? "Not" : "OK"}
      </h2>
      <h3>{input}</h3>
      <div className='JSXcss1'>
        <h1> hey </h1>
      </div>

      <div>
        <h>Props</h>
        <Product name="ModuleGSM"
          price="500000">
        </Product>
        <Product name="ModuleGPRS"
          price="800000">
        </Product>
      </div>
    </div>

  );
}

export default Demo;
