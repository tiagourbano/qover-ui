import React, { Component } from 'react';

export default class Plan extends Component {
    render() {
        return(
            <div className="Plan">
                <div className="type">
                    {this.props.type}
                </div>

                <div className="price">
                    <span>{this.props.price} €</span>
                    <small>YEARLY INCL. TAXEX</small>
                </div>

                <div className="description"><strong>Maximum duration travel</strong> of <strong>{this.props.maxDurationTravel} days</strong></div>
                <div className="description"><strong>Medical expenses reimbursement</strong> up to <strong>{this.props.medicalReimbursement} €</strong></div>
                <div className="description"><strong>Personal assistance abroad</strong> up to <strong>{this.props.personalAssistance} €</strong></div>
                <div className="description"><strong>Travel assistance abroad</strong> up to <strong>{this.props.travelAssistance} €</strong> per insured per travel</div>
                <div className="description"><strong>Coverage duration: {this.props.coverageDuration} year</strong></div>

                <div className="option">
                    <div className="button">Choose this plan</div>
                </div>
            </div>
        )
    }
}
