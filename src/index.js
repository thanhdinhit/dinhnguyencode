import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
 //import Demo from './Demo';
// import State from './State';
 //import EventHandling from './EventHandling';
 //import LifeCycle from './LifeCycle';
//import ConditionnalRendering from './ConditionalRendering';
//import LifeCycleD from './LifeCycleD';
 //import Ref from './Ref';
// import List from './List';
// import ParentComponent  from './ParentComponent';
// import ChildComponent  from './ChildComponent';
// import Form from './Form';
//import Validate from  './Validate';
//import ValidateB from './Validate_B';
//import LiftingStateUp from './LiftingStateUp';
//import CommunicateParentChild from './CommunicateParentChild';
//import Composition from './Composition';
import Inheritance from './Inheritance';
import * as serviceWorker from './serviceWorker';


//..........Rendering element...........//
// function time() {
//   const element = (
//     <div>
//       <h1>Timer</h1>
//       <h2>{new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(time, 1000);

ReactDOM.render(<Inheritance/>, document.getElementById('root'));

//set timeout to view componentWillUnmount
// setTimeout(() => {
//           ReactDOM.unmountComponentAtNode(document.getElementById('root'));}, 10000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
