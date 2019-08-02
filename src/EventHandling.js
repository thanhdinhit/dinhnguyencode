import React from 'react';
import './EventHandling.css'

class EventHandling extends React.Component {
   constructor() {
      super();
      this.onClick = this.onClick.bind(this);
   }

   onClick() {
      alert('Thank for click me =)))))))');
      console.log('Thank for click me =)))))))');
   }

   render() {

      return (
         <div>
            <button type='button' className='button' onClick={this.onClick}>Clickk</button>
         </div>
      );
   }
}

export default EventHandling;

