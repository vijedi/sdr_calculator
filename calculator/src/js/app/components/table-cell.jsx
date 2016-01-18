import React, {Component, PropTypes} from 'react'
import {render} from 'react-dom';
import {connect} from 'react-redux';

export default class TableCell extends Component {
    constructor(props) {
        super(props);
        console.log('called for props', props);
        this.state = {value: 0}
    }

    render() {
        const { totalComp, acv, grossMargin, profit } = this.props;
        let computedValue = () => {
            let tc = parseFloat(totalComp);
            let mg = parseFloat(grossMargin);
            let acvf = parseFloat(acv);
            let sp = parseFloat(profit);
            return 1.0 * (tc / (mg * 0.01 * acvf)) * (sp / (.01 * this.props.winRate * .01 * this.props.conversionRate));
        };
        if(this.props.winRate) {
            return (
                <td>{computedValue()}</td>
            )     
        } else {
            return <td>{this.props.conversionRate}%</td>
        }
    }
}

function select(state) {
    let sdrForm = state.sdrForm;
    return {
        totalComp: sdrForm.totalComp,
        acv: sdrForm.acv,
        grossMargin: sdrForm.grossMargin,
        profit: sdrForm.profit
    }
}

TableCell.propTypes = {
    winRate: PropTypes.number,
    conversionRate: PropTypes.number.isRequired
};

export default connect(select)(TableCell);
