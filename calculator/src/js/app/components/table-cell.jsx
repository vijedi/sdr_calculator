import React, {Component, PropTypes} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';

export default class TableCell extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 0}
    }
    
    render() {
        if(this.props.winRate) {
            return (
                <td className={this.props.className} ><span className='textValue' ref='computedTextValue' data-value={this.state.value}>0</span></td>
            )     
        } else {
            return <td>{this.props.conversionRate}%</td>
        }
    }
    
    computedValue(props) {
        const { totalComp, acv, grossMargin, profit, winRate, conversionRate } = props;
        let tc = parseFloat(totalComp);
        let mg = parseFloat(grossMargin);
        let acvf = parseFloat(acv);
        let sp = parseFloat(profit);
        let wr = parseFloat(winRate);
        let cr = parseFloat(conversionRate);

        let computed = 1.0 * (tc / (mg * 0.01 * acvf)) * (sp / (.01 * wr * .01 * cr));
        if(isNaN(computed) || !isFinite(computed)) {
            return "-";
        } else {
            return computed;
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.winRate) {
            this.setState({value: this.computedValue(nextProps)})
        }
    }

    updateCellValue(valueOld, valueNew) {
        const mySpan = this.refs.computedTextValue;
        let startValue = ("-" == valueOld) ? 0 : valueOld;
        d3.select(mySpan).transition().
            duration(750).tween('text', () => {
                if("-" == valueNew) {
                    return function(t) {
                        this.textContent = valueNew;
                    }
                } else {
                    var i = d3.interpolateRound(startValue, valueNew);
                    return function(t) {
                        this.textContent = d3.format('0,000')(i(t));
                    }
                }
        });
    }

    componentDidUpdate(prevProps, prevState) {
        const valueOld = prevState.value;
        const valueNew = this.state.value;
        this.updateCellValue(valueOld, valueNew);
    }

    componentDidMount() {
        this.updateCellValue(0, this.computedValue(this.props));
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
    conversionRate: PropTypes.number.isRequired,
    className: PropTypes.string
};

export default connect(select)(TableCell);
