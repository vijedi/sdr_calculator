import React, {Component, PropTypes} from 'react'
import {render} from 'react-dom';
import {connect} from 'react-redux';
import TableCell from './table-cell.jsx';

export default class HungrySdrChart extends Component {

    render() {
        const {winRates, conversionRates, winRate, conversionRate} = this.props;
    
        return (
            <div className='row'>
                <div className='sixteen wide column'>
                    <table className='ui celled padded definition table leadsTable'>
                        <caption className='ui table caption'>Conversion Rates vs Win Rates</caption>
                        <thead>
                            <tr>
                                <th></th>
                                {winRates.map((wr, index) => {
                                    return <th key={'hdr0,' + index}>{wr}%</th>
                                })}
                                <th>{winRate}%</th>
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
                                        <TableCell key={'hsr' + rIdx + ',userWinRate'} conversionRate={cr} winRate={winRate} />
                                    </tr>
                                )
                            })}
                            <tr key={'hsr_userConversionRate'}>
                                <TableCell key={'hsr_userConversionRate,0'} conversionRate={conversionRate} />
                                {winRates.map((value, cIdx) => {
                                    return (<TableCell key={'hsr_userConversionRate' + ',' + cIdx} conversionRate={conversionRate} winRate={value} />)
                                })}
                                <TableCell key={'hsr_userConversionRate,userWinRate'} conversionRate={conversionRate} winRate={winRate} />
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function select(state) {
    return { 
        winRates: state.ratesForm.winRates,
        conversionRates: state.ratesForm.conversionRates,
        winRate: state.sdrForm.winRate,
        conversionRate: state.sdrForm.conversionRate
    };
}

export default connect(select)(HungrySdrChart);
