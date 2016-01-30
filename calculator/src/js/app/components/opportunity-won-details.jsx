import React, {Component, PropTypes} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';

export default class OpportunityWonDetails extends Component {
    render() {
        const { totalComp, acv, grossMargin, profit } = this.props;
        let tc = parseFloat(totalComp);
        let mg = parseFloat(grossMargin);
        let acvf = parseFloat(acv);
        let sp = parseFloat(profit);
        let value = Math.round(1.0 * (tc / (mg * 0.01 * acvf) * sp));

        return (
            <h4>Sales will have to close an additional <strong>{value}</strong> deals
                to support this SDR</h4>
        )
    }
}

function select(state) {
    let sdrForm = state.sdrForm;
    return {
        totalComp: sdrForm.totalComp,
        acv: sdrForm.acv,
        grossMargin: sdrForm.grossMargin,
        profit: sdrForm.profit
    };
}

export default connect(select)(OpportunityWonDetails);
