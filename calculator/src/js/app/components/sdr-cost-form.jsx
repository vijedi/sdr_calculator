import React from 'react';
import { connect } from 'react-redux';
import { setTotalComp, setAcv, setGrossMargin, setProfit } from '../actions/actions';
import LabeledTextField from './labeled-text-field.jsx';

class SdrCostForm extends React.Component {
    
    constructor() {
        super();
    }

    render() { 
        const { dispatch, totalComp, acv, grossMargin, profit, 
                conversionRate, winRate } = this.props;
        return (
            <form className='ui form'>
                <h3 className='ui inverted dividing header'>Do You Have Enough Leads?</h3>
                <div className='field'>
                    <label>How much is the total comp for an SDR?</label>
                    <div className='fields'>
                        <div className='sixteen wide field'>
                            <LabeledTextField placeholder='The total annual cost in dollars' 
                                fieldValue={totalComp}
                                onFieldChange={text => dispatch(setTotalComp(text))}
                                label='$'
                            />
                        </div>
                    </div>
                    <label>Your organization's annualized average deal size?</label>
                    <div className='fields'>
                        <div className='sixteen wide field'>
                            <LabeledTextField placeholder='The amount in dollars' 
                                fieldValue={acv}
                                onFieldChange={text => dispatch(setAcv(text))}
                                label='$'
                            />
                        </div>
                    </div>
                    <label>Your organization's gross margin?</label>
                    <div className='fields'>
                        <div className='six wide field'>
                            <LabeledTextField placeholder='a percent' 
                                fieldValue={grossMargin}
                                onFieldChange={text => dispatch(setGrossMargin(text))}
                                label='%'
                                labelPlacement='right'
                            />
                        </div>
                    </div>
                    <label>Your desired sales profitablilty?</label>
                    <div className='fields'>
                        <div className='six wide field'>
                            <LabeledTextField placeholder='a multiple' 
                                fieldValue={profit}
                                onFieldChange={text => dispatch(setProfit(text))}
                                label="x"
                                labelPlacement='right'
                            />
                        </div>
                    </div>
                    <label>Conversion Rate</label>
                    <div className='fields'>
                        <div className='six wide field'>
                            <LabeledTextField placeholder='Leads to SQLs'
                                fieldValue={conversionRate}
                                onFieldChange={text => dispatch(setConversionRate(text))}
                                label="%"
                                labelPlacement='right'
                            />
                        </div>
                    </div>
                    <label>Win Rate</label>
                    <div className='fields'>
                        <div className='six wide field'>
                            <LabeledTextField placeholder='SQLs to Wins'
                                fieldValue={winRate}
                                onFieldChange={text => dispatch(setWinRate(text))}
                                label="%"
                                labelPlacement='right'
                            />
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

function select(state) {
    var sdrForm = state.sdrForm
    return {
        totalComp: sdrForm.totalComp,
        acv: sdrForm.acv,
        grossMargin: sdrForm.grossMargin,
        profit: sdrForm.profit,
        conversionRate: sdrForm.conversionRate,
        winRate: sdrForm.winRate
    }
}

export default connect(select)(SdrCostForm);

