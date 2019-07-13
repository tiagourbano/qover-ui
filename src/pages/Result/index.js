import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Plan from '../../components/plan';

class Result extends Component {
    state = {
        planSelected: null,
        offer: {
            global: null,
            universal: null
        }
    };

    componentDidMount() {
        this.props.getSurveyAnswers();

        const { survey } = this.props;
        if (survey) {
            this.calculateOffer();
        } else {
            this.props.history.push("/survey");
        }
    }

    calculateOffer() {
        const { survey } = this.props;

        let price = 0;
        let factor = 0;
        switch (survey.car) {
            case 'audi':
                price = 250;
                factor = 0.3;
                break;
            case 'bmw':
                price = 150;
                factor = 0.4;
                break;
            case 'porsche':
                price = 500;
                factor = 0.7;
                break;
        }

        const globalPrice = price;
        const universalPrice = price + this.getPercentage(survey.price, factor);

        this.setState({
            offer: {
                global: globalPrice,
                universal: universalPrice.toFixed(2),
            }
        })
    }

    getPercentage(price, factor) {
        return (price * factor) / 100;
    }

    render() {

        return (
            <div>
                <Link to="/logout"> Log Out </Link>
                <hr className="my-3" />
                <h1>Select Plan</h1>

                <Plan
                    type={"Global"}
                    price={this.state.offer.global}
                    maxDurationTravel={"90"}
                    medicalReimbursement={"1.000.000"}
                    personalAssistance={"5.000"}
                    travelAssistance={"1.000"}
                    coverageDuration={"1"}
                />
                <Plan
                    type={"Universe"}
                    price={this.state.offer.universal}
                    maxDurationTravel={"180"}
                    medicalReimbursement={"3.000.000"}
                    personalAssistance={"10.000"}
                    travelAssistance={"2.500"}
                    coverageDuration={"1"}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    survey: state.survey.survey
})

export default connect(mapStateToProps, actions)(Result)
