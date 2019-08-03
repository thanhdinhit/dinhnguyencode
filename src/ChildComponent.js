import React from 'react';

class ChildComponent extends React.Component {
    render() {
        return <button onClick={() => this.props.action('Set Parent state set from child: ' + Math.floor(Math.random() * 999))}>Update Parent</button>;
    }
}

export default ChildComponent;

