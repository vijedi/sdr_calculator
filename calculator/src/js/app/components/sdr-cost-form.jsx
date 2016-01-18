import React from 'react';
import { connect } from 'react-redux';
import { setTotalComp, setAcv } from '../actions/actions';
import LabeledTextField from './labeled-text-field.jsx';

class SdrCostForm extends React.Component {
    
    constructor() {
        super();
    }

    render() { 
        const { dispatch, totalComp, acv } = this.props;
        return (
            <form className='ui form'>
                <h3 className='ui dividing header'>Do You Have Enough Leads?</h3>
                <div className='field'>
                    <label>How much is the total comp for an SDR?</label>
                    <div className='fields'>
                        <div className='sixteen wide field'>
                            <LabeledTextField placeholder='The total annual cost in dollars' 
                                fieldValue={totalComp}
                                onFieldChange={text => dispatch(setTotalComp(text)) }
                            />
                        </div>
                    </div>
                    <label>Your organization's annualized average deal size?</label>
                    <div className='fields'>
                        <div className='sixteen wide field'>
                            <LabeledTextField placeholder='The amount in dollars' 
                                fieldValue={acv}
                                onFieldChange={text => dispatch(setAcv(text)) }
                            />
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

function select(state) {
    return {
        totalComp: state.totalComp,
        acv: state.acv
    }
}

export default connect(select)(SdrCostForm);

