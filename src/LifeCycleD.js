import React from 'react';

class LifeCycleD extends React.Component {

  constructor(props) {
    super(props);
    this.state = { data: 0 }
    this.setUpdateNumber = this.setUpdateNumber.bind(this);
  };
  setUpdateNumber() {
    this.setState({ data: this.state.data + 1 })
  }


  render() {
    console.log('render run');
    return (
      <div>
        <button onClick={this.setUpdateNumber}>Click+++</button>
        <LogData myNumber={this.state.data}></LogData>
      </div>
    );
  }
}
//note: mount(gắn kết)
class LogData extends React.Component {
  componentWillMount() {
    console.log('componentWillMount run');// method execution before component render (server, client)
  }

  componentDidMount() {
    console.log('componentDidMount run');// method execution component render(client), exe DOM, update state
  }
  componentWillReceiveProps(newProps) {
    console.log('componentWillReceiveProps run');//method execution props update, before component reRender
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate run');//update state of component before reRender
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate run');// finish componentWillUpdate =>componentDidUpdate 
  }
  componentWillUnmount() {
    console.log('componentWillUnmount run');// unmount component(=delete component react)
  }

  shouldComponentUpdate(newProps, newState) {
    console.log('shouldComponentUpdate run');
    return true;
    //if false  component not render when update state.
  }
  render() {
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    );
  }
}



export default LifeCycleD;

