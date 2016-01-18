import React, {Component, PropTypes} from 'react'
import {render} from 'react-dom';
import {connect} from 'react-redux';

export default class HungrySdrChart extends Component {

    render() {
        const {totalComp, acv, grossMargin, profit } = this.props;
        const winRates = [10, 25, 33];
        const conversionRates = [10, 25, 33];
        
        const computeValue = (winRate, conversionRate) => {
            let tc = parseFloat(totalComp);
            let mg = parseFloat(grossMargin);
            let acvf = parseFloat(acv);
            let sp = parseFloat(profit);
            return 1.0 * (tc / (mg * 0.01 * acvf)) * (sp / (.01 * winRate * .01 * conversionRate));
        };

        const rows = [];
        for(var i = 0; i < conversionRates.length; i++) {
            let row = [];
            row.push(conversionRates[i]);
            for(var j = 0; j < winRates.length; j++) {
                row.push(computeValue(winRates[j], conversionRates[i]));
            }
            rows.push(row);
        }

        if(!(totalComp && acv)) {
            return (
                <h4 className='ui header'>Fill out the fields to find out the number of leads</h4>
            )
        } else {
            return (
                <div className='row'>
                    <div className='sixteen wide column'>
                        <table className='ui celled padded definition table leadsTable'>
                            <thead>
                                <tr>
                                    <th></th>
                                    {winRates.map(function(value, index) {
                                        return <th key={'hdr0,' + index}>{value}</th>
                                    })}
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map(function(row, rIdx) {
                                    return (
                                        <tr key={'hdr' + rIdx}>
                                            {row.map(function(value, cIdx) {
                                                return (<td key={'hdr' + rIdx + ',' + cIdx}>{value}</td>)
                                            })}
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
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

export default connect(select)(HungrySdrChart);
