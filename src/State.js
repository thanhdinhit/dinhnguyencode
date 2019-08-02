
import React from 'react';
import './App.css';
class State extends React.Component {
   constructor() {
      super();
      this.state = {
         products: 
         [
            {
               "id":1,
               "name":"Module1",
               "price":"20",
               "emeil":"452356",
               "status":true
            },
            {
               "id":2,
               "name":"Module2",
               "price":"30",
               "emeil":"452jh56",
               "status":false
            },
            {
               "id":3,
               "name":"Module3",
               "price":"40",
               "emeil":"452liy56",
               "status":true
            }
         ],
         isActive : true
      }
   }
   onSetState = () =>{
     if (this.state.isActive === true){
       this.setState({
         isActive:false
       });
    }
     else{
      this.setState({
        isActive:true
      });
    }
     
   }
   render() {
     var element = this.state.products.map((product,index)=>{
       var result =''
       if(this.state.isActive){
          result = 
          <tr key={this.state.products.id}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.emeil}</td>
          </tr>
       }
        return result;              
     });
      return (
         <div>
            <table className = 'table'>
              <thead>
                <tr>
                  <th>Nameproduct</th>
                  <th>Price</th>
                  <th>Emeil </th>
                </tr>
              </thead>
              <tbody>
                {element}
              </tbody>
            </table> 
            <br/>
            <button type="button" className = 'button' onClick= {this.onSetState}>Click : { this.state.isActive ? '1' : '0' }</button>

         </div>
      );
   }
}


export default State;

