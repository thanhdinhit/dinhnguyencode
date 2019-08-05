import React, { Component } from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail, isEmpty } from 'validator';

// Check for common errors
const required = (value) => {
    if (isEmpty(value)) {
        return <small className="form-text text-danger">This field is required</small>;
    }
}

const email = (value) => {
    if (!isEmail(value)) {
        return <small className="form-text text-danger">Invalid email format</small>;
    }
}

const minLength = (value) => {
    if (value.trim().length < 6) {
        return <small className="form-text text-danger">Password must be at least 6 characters long, Please add++ help me.</small>;
    }
}

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onSubmit(e) {
        e.preventDefault(); // prevent page reload when clcik button submit
        this.form.validateAll();//https://www.npmjs.com/package/react-validation
        //validates all controls by marking all controls
        if (this.checkBtn.context._errors.length === 0) {
            console.log(this.state);
            alert('success');
        }
    }

    onChangeHandler(e){
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="container">
                <div className="login-container">
                    <div id="output"></div>
                    <div className="avatar"></div>
                    <div className="form-box">
                        <Form onSubmit={e => this.onSubmit(e)} ref={form => { this.form = form }}> 
                            <Input
                                name="email"
                                onChange={this.onChangeHandler}
                                type="text"
                                placeholder="Email"
                                className="form-control"
                                validations={[required, email]}
                            />
                            <Input
                                name="password"
                                onChange={this.onChangeHandler}
                                type="password"
                                placeholder="Password"
                                className="form-control"
                                validations={[required, minLength]}
                            />
                            <button className="login" type="submit">Login</button>
                            <CheckButton style={{ display: 'none' }} ref={c => { this.checkBtn = c }} />
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;