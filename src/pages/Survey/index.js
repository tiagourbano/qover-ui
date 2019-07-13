import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { Input } from '../../components/form/Input';
import { Select } from '../../components/form/Select';

const DEFAULT_STATE = {
    form: {
        age: "",
        car: "",
        price: ""
    },
    errors: {}
};

const carOptions = ['AUDI', 'BMW', 'PORSCHE']

class Survey extends Component {
    state = DEFAULT_STATE;

    componentDidMount() {
        const data = JSON.parse(localStorage.getItem('data'));
        this.setState({ user: { nickname: data.name, email: data.email } })
    }

    onChange = (field, ev) => {
        const { form } = this.state;
        form[field] = ev.target.value;
        this.setState({ form });
    }

    handleSubmit = () => {
        if (!this.formValidator()) {
            return null;
        }

        const { form } = this.state;
        this.props.addSurveyAnswers(form);
        this.setState(DEFAULT_STATE);

        this.props.history.push("/result");
    }

    formValidator = () => {
        const { form } = this.state;
        const errors = {};
        const MIN_CAR_PRICE = 5000
        const MIN_AGE = 18
        const MIN_AGE_FOR_PORSCHE = 25

        Object.keys(form).forEach((item) => {
            if (!form[item]) {
                errors[item] = `${item} is required`;
            }
        });

        if (Object.keys(errors).length > 0) {
            this.setState({ errors });
            return false;
        }

        if (form.price < MIN_CAR_PRICE) {
            errors.price = 'Sorry! The price of the car is too low';
        }

        if (form.age < MIN_AGE && form.car !== 'porsche') {
            errors.age = 'Sorry! The the driver is too young';
        }

        if (form.age < MIN_AGE_FOR_PORSCHE && form.car === 'porsche') {
            errors.age = 'Sorry! We can not accept this particular risk';
        }

        this.setState({ errors });
        return Object.keys(errors).length === 0;
    }

    render() {
        const { form, errors } = this.state;

        return (
            <div className="Survey">
                <Link to="/logout"> Log Out </Link>
                <hr className="my-3" />

                <div className="form">
                    <Input
                        error={errors.age}
                        type={"number"}
                        value={form.age}
                        label={"Age of the driver"}
                        class={"small-field"}
                        onChange={(ev) => this.onChange('age', ev)}
                    />

                    <Select error={errors.car} label={"Car"} options={carOptions} onChange={(ev) => this.onChange('car', ev)} />

                    <Input
                        error={errors.price}
                        type={"number"}
                        value={form.price}
                        label={"Purchase Price"}
                        class={"small-field"}
                        suffix={"€"}
                        onChange={(ev) => this.onChange('price', ev)}
                    />

                    <div className="form-group">
                        <button onClick={this.handleSubmit} className="button-get-price">Get a price</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    survey: state
})

export default connect(mapStateToProps, actions)(Survey);
