import React, {Component, PropTypes} from 'react'
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
                <td><span className='textValue' ref='computedTextValue' data-value={this.state.value}>0</span></td>
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
        return 1.0 * (tc / (mg * 0.01 * acvf)) * (sp / (.01 * winRate * .01 * conversionRate));
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.winRate) {
            this.setState({value: this.computedValue(nextProps)})
        }
    }

    updateCellValue(valueOld, valueNew) {
        const mySpan = this.refs.computedTextValue;
        d3.select(mySpan).transition().
            duration(750).tween('text', () => {
            var i = d3.interpolateRound(valueOld, valueNew);
            return function(t) {
                this.textContent = d3.format('0,000')(i(t));
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
    conversionRate: PropTypes.number.isRequired
};

export default connect(select)(TableCell);
