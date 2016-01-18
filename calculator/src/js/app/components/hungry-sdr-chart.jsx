import React, {Component, PropTypes} from 'react'
import {render} from 'react-dom';
import {connect} from 'react-redux';
import TableCell from './table-cell.jsx';

export default class HungrySdrChart extends Component {

    render() {
        const {winRates, conversionRates} = this.props;

        return (
            <div className='row'>
                <div className='sixteen wide column'>
                    <table className='ui celled padded definition table leadsTable'>
                        <thead>
                            <tr>
                                <th></th>
                                {winRates.map((winRate, index) => {
                                    return <th key={'hdr0,' + index}>{winRate}%</th>
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {conversionRates.map(function(cr, rIdx) {
                                return (
                                    <tr key={'hsr' + rIdx}>
                                        <TableCell key={'hsr' + rIdx + ',0' } conversionRate={cr} />
                                        {winRates.map((value, cIdx) => {
                                            return (<TableCell key={'hsr' + rIdx + ',' + cIdx} conversionRate={cr} winRate={value} />)
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

function select(state) {
    return state.ratesForm;
}

export default connect(select)(HungrySdrChart);
