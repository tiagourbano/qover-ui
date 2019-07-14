import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Plan from '../../components/Plan';
import { GLOBAL, UNIVERSE, CARS } from './planTypes';

import './index.scss';

class Result extends Component {
    state = {
        planSelected: null,
        offer: {
            yearly: {
                global: null,
                universal: null
            },
            monthly: {
                global: null,
                universal: null
            },
            show: {
                global: null,
                universal: null
            }
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
        const car = CARS.filter((auto) => auto.car === survey.car)[0];

        const globalPrice = car.price;
        const universalPrice = car.price + this.getPercentage(survey.price, car.factor);

        this.setState({
            offer: {
                yearly: {
                    global: globalPrice,
                    universal: universalPrice.toFixed(2),
                },
                monthly: {
                    global: globalPrice / 12,
                    universal: (universalPrice / 12).toFixed(2),
                },
                show: {
                    global: globalPrice / 12,
                    universal: (universalPrice / 12).toFixed(2),
                }
            }
        })
    }

    getPercentage(price, factor) {
        return (price * factor) / 100;
    }

    updatePaymentValues() {
        const { offer } = this.state;
        const showOffer = (offer.show === offer.yearly) ? offer.monthly : offer.yearly;

        this.setState({
            offer: {
                yearly: offer.yearly,
                monthly: offer.monthly,
                show: showOffer
            }
        });
    }

    planClick(plan) {
        this.setState({
            planSelected: plan
        });
    }

    render() {
        return (
            <div className="Result">
                <h1>Select Plan</h1>

                <div className="payment-type">
                    <span>PAY MONTHLY</span>
                    <label className="switch">
                        <input type="checkbox" onChange={() => this.updatePaymentValues()} />
                        <span className="slider round"></span>
                    </label>
                    <span>PAY YEARLY</span>
                </div>

                <div className="plans">
                    <Plan
                        type={GLOBAL}
                        price={this.state.offer.show.global}
                        maxDurationTravel={"90"}
                        medicalReimbursement={"1.000.000"}
                        personalAssistance={"5.000"}
                        travelAssistance={"1.000"}
                        coverageDuration={"1"}
                        planSelected={(this.state.planSelected === GLOBAL)}
                        onClick={this.planClick.bind(this)}
                    />
                    <Plan
                        type={UNIVERSE}
                        price={this.state.offer.show.universal}
                        maxDurationTravel={"180"}
                        medicalReimbursement={"3.000.000"}
                        personalAssistance={"10.000"}
                        travelAssistance={"2.500"}
                        coverageDuration={"1"}
                        planSelected={(this.state.planSelected === UNIVERSE)}
                        onClick={this.planClick.bind(this)}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    survey: state.survey.survey
})

export default connect(mapStateToProps, actions)(Result)
