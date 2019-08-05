import React from 'react';

var Child = React.createClass({
  render: function () {
    return (
      <div>
      <button id='1' onClick={this.props.changeState}>1</button>
      <button id='2' onClick={this.props.changeState}>2</button>
      </div>
      );
  },
});

var Parent = React.createClass({
  getInitialState() {
    return {
      parentState: '1',
    };
  },
  changeState: function (e) {
    this.setState({ parentState: e.target.id });
  },
  render: function () {
    return (
      <Child changeState={this.changeState} state={this.state.parentState} />
    );
  },
});

export default Parent;