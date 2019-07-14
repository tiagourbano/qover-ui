import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { Input } from '../../components/form/Input';
import { Select } from '../../components/form/Select';

import './index.scss';

const DEFAULT_STATE = {
    form: {
        age: null,
        car: null,
        price: null,
    },
    errors: {}
};

const carOptions = ['AUDI', 'BMW', 'PORSCHE'];

class Survey extends Component {
    state = DEFAULT_STATE;

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

        if (this.allRequiredFieldsAreFilled()) {
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
    }

    allRequiredFieldsAreFilled() {
        const { form } = this.state;
        const errors = {};

        Object.keys(form).forEach((item) => {
            if (!form[item]) {
                errors[item] = `${item} is required`;
            }
        });

        if (Object.keys(errors).length > 0) {
            this.setState({ errors });
            return false;
        }

        return true;
    }

    render() {
        const { form, errors } = this.state;

        return (
            <div className="Survey">
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

                    <div className="button-get-price">
                        <button onClick={this.handleSubmit}>Get a price</button>
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
