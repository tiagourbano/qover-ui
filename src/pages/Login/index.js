import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            message : this.props.location.state ? this.props.location.state.message : '',
        };
    }

    signIn = () => {
        const data = { email: this.email, password: this.password };
        const requestInfo = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        };

        fetch('http://localhost:3000/customer/authenticate', requestInfo)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error("Username or password invalid");
            })
            .then(response => {
                localStorage.setItem('token', response.token);
                localStorage.setItem('data', JSON.stringify(response.data));
                this.props.history.push("/survey");
                return;
            })
            .catch(e => {
                this.setState({ message: e.message });
            });
    }

    render() {
        return (
            <div className="col-md-6">
                <hr  className="my-3"/>
                {
                    this.state.message !== ''
                        ? alert(this.state.message)
                        : ''
                }
                <Form>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="text" id="email" onChange={e => this.email = e.target.value} placeholder="" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" id="password" onChange={e => this.password = e.target.value} placeholder="" />
                    </FormGroup>

                    <Button color="primary" block onClick={this.signIn}>Sign in to your account</Button>
                </Form>
            </div>
        );
    }
}
