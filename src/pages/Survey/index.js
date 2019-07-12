import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Survey extends Component {

    constructor() {
        super();
        this.state = {
            user: {},
        }
    }

    componentDidMount() {
        const data = JSON.parse(localStorage.getItem('data'));
        this.setState({ user: { nickname: data.name, email: data.email } })
    }

    render() {
        return (
            <div>
                <hr className="my-3" />
                <p>
                    <code> {this.state.user.nickname}, {this.state.user.email} logado com sucesso! ^-^  </code>
                </p>
                <div className="text-center">
                    <Link to="/result" className="btn btn-outline-primary"> Result </Link>
                </div>
            </div>
        );
    }
}
