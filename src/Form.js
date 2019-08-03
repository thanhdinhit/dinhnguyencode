import React from 'react';
import './Form.css';
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '', //note name state should same with name in input
            password: '',
            description :''
        };
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onChangeClick = this.onChangeClick.bind(this);
    }
    onChangeInput(event) {
        //use wwhen 1 input
        //   this.setState({
        //       username : event.target.value

        //   });
        //console.log(event.target.value);
        //
        //use when multi input
        var target = event.target;//Get  value of each input box
        var name = target.name;//name of input example name = "username", name = "password"
        var value = target.value;//Get  value of each input box with name 
        this.setState({
            [name] : value
        });
    }
    onChangeClick(event) {
        event.preventDefault(); //not reload page when click submit
        console.log(this.state);
    }

    render() {

        return (
            <div>
                <form onSubmit={this.onChangeClick}>
                    <input className="input" name = "username" type="text" onChange={this.onChangeInput} ></input>
                    <input className="input1" name = "password" type="password" onChange={this.onChangeInput} ></input>
                    <textarea className="input2" name = "description"  onChange={this.onChangeInput}></textarea>
                    <button className="button" type="submit">Save</button>
                    <button className="button1" type="reset">Delete</button>
                </form>
            </div>
        );
    }
}

export default Form;

