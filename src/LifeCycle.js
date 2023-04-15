import React from 'react';

class LifeCycle extends React.Component {
   componentWillMount() {
      console.log('componentWillMount run',this.props);
   }

   componentDidMount() {
      console.log('componentDidMount run',this.props);
   }

   constructor(props) {
      super(props);
      this.state = { statusMyself: 'Single' };
      console.log('prop state run');
   }
   componentWillReceiveProps()
   {
      console.log(this.props);
      
   }


   render() {
      console.log('render run');
      return (
         <div>
            <button className='button' onClick={() => this.setState({ statusMyself: 'Double' })}>ChangeStatusOF_ME</button>
            <p>{this.state.color}</p>
         </div>
      );
   }
}

export default LifeCycle;

//follow init component in reactjs
/*
    Khởi tạo class đã kế thừa từ Component
    Khởi tạo giá trị mặc định cho Props
    Khởi tạo giá trị mặc định cho State
    Gọi hàm componentWillMount()
    Gọi hàm render()
    Gọi hàm componentDidMount()
*/