import React from 'react';
import './Ref.css'
class Ref extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.onClicks = this.onClicks.bind(this);
  }
  onClicks() {
    console.log(this.refs.name.value);
  }

  render() {
    console.log(this.myRef.current)
    return (
      <div>
        <input input="text" className="input" ref="name"></input>
        <button type="submit" className="button" onClick={this.onClicks}>Click+++</button>
        <input type='text' ref={this.myRef}></input>
        
      </div>

    );
  }
}

export default Ref;

