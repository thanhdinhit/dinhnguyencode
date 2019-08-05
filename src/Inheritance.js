import React from 'react';

class Parent extends React.Component {
  constructor(props) {
    super(props)
    this.parentMethod = this.parentMethod.bind(this) //referencing the method in constructor
  }

  parentMethod() {
    console.log('Parent Method')
  }

  render() {
    return false
  }
}

class Child extends Parent {
  constructor() {
    super() //call super to run parent's constructor
    this.childMethod = this.childMethod.bind(this);
  }
  childMethod() {
    console.log("Child Method")
  }


  render() {
    this.parentMethod() //calling parent method
    return false
  }
}

class ChildOther extends Child {
  // constructor(){
  //   super() //call super to run parent's constructor
  // }

  render() {
    this.parentMethod() //calling parent method
    this.childMethod()
    console.log("Method other")
    return false
  }
}

export default ChildOther;