import React, { Component } from 'react';

import { ReactComponent as PlanSelected } from './valid.svg';

export default class Plan extends Component {
    currencyFormatBE(price) {
        if (!price) {
            return;
        }

        return parseFloat(price)
            .toFixed(2)
            .replace('.', ',')
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    }

    onPlanClick() {
        this.props.onClick(this.props.type);
    }

    render() {
        return(
            <div className={`Plan ${ this.props.planSelected ? 'selected' : '' }`}>
                <div className="type">
                    {this.props.type}
                </div>

                <div className="price">
                    <span>{this.currencyFormatBE(this.props.price)}<span>€</span></span>
                    <small>YEARLY INCL. TAXEX</small>
                </div>

                <div className="description"><span>Maximum duration travel</span> of <span>{this.props.maxDurationTravel} days</span></div>
                <div className="description"><span>Medical expenses reimbursement</span> up to <span>{this.props.medicalReimbursement} €</span></div>
                <div className="description"><span>Personal assistance abroad</span> up to <span>{this.props.personalAssistance} €</span></div>
                <div className="description"><span>Travel assistance abroad</span> up to <span>{this.props.travelAssistance} €</span><br />per insured per travel</div>
                <div className="description"><span>Coverage duration: {this.props.coverageDuration} year</span></div>

                <div className="option">
                    {
                        this.props.planSelected
                            ? (<div className="button"><PlanSelected /> Plan selected</div>)
                            : (<div className="button" onClick={this.onPlanClick.bind(this)}>Choose this plan</div>)
                    }
                </div>
            </div>
        )
    }
}
