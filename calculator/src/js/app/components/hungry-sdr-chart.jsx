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
                        <caption className='ui caption'>Annualized # of Leads</caption>
                        <thead>
                            <tr>
                                <th>Conversion % <br />VS Win Rate</th>
                                {winRates.map((wr, index) => {
                                    return <th key={'hdr0,' + index}>{wr}%</th>
                                })}
                                <th className='your-win-rate'>{winRate}%</th>
                            </tr>
                        </thead>
                        <tbody>
                            {conversionRates.map(function(cr, rIdx) {
                                return (
                                    <tr key={'hsr' + rIdx}>
                                        <TableCell className='' key={'hsr' + rIdx + ',0' } conversionRate={cr} />
                                        {winRates.map((value, cIdx) => {
                                            return (<TableCell className='' key={'hsr' + rIdx + ',' + cIdx} conversionRate={cr} winRate={value} />)
                                        })}
                                        <TableCell className='your-win-rate' key={'hsr' + rIdx + ',userWinRate'} conversionRate={cr} winRate={winRate} />
                                    </tr>
                                )
                            })}
                            <tr className='your-conversion-rate-row' key={'hsr_userConversionRate'}>
                                <TableCell key={'hsr_userConversionRate,0'} conversionRate={conversionRate} />
                                {winRates.map((value, cIdx) => {
                                    return (<TableCell key={'hsr_userConversionRate' + ',' + cIdx} 
                                            conversionRate={conversionRate} winRate={value} />)
                                })}
                                <TableCell className='your-win-rate' 
                                    key={'hsr_userConversionRate,userWinRate'} conversionRate={conversionRate} winRate={winRate} />
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
