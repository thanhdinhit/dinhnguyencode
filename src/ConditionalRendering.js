import React from 'react';

class ConditionnalRendering extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: true,
      list: [1,2,3],
    }
  }

  render() {
    //let msg;
    // if (this.state.isLogin) {
    //   msg = "OK";
    // }
    // else {
    //   msg = "notOK";
    // }
    if (!this.state.list) {
      return null;
    }
    if(!this.state.list.length){
      return <p>List empty</p>
    }
    else {
      return (
        <div>
          <h1>{this.state.list.map(item => <p key = {item}>item:{item}</p>)}</h1>
          {this.state.list && <p>Login accept...OK nhe!</p>}
        </div>
      );
    }
  }
}


export default ConditionnalRendering;

