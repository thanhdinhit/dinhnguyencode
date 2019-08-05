// prop: thuộc tính của 1 component (class)
// component child to parent
// this bind
// from,validation
// note: bind = arrow function
// bind: input value from outside into function, 
// state: in component, private in component,this.setState()
// form: get value = onChange, display = value, get value form = onSubmit
// validate :
// package: 	npm install react-validation
// 			npm install validator
// Ref:use Interactive UI element or element input user; use reference a node DOM or return a node it reference 
//refs sẽ return về một node mà chúng ta tham chiếu đến. 
//ref={element => { this.form = element } ==>React allows you to create a ref by passing a callback function to the ref attribute of a component
//                                                The callback is used to store a reference to the DOM node in an instance property
//Shared State: When we update an input, an other component should reflect the change (and vice versa)
// lifting state up: share state to component origin nearest
//https://stackoverflow.com/questions/40329396/react-component-inheritance