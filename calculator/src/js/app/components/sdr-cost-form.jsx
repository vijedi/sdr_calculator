import React from 'react';
import LabeledTextField from './labeled-text-field.jsx';

class SdrCostForm extends React.Component {
    
    constructor() {
        super();
    }

    render() { 
        return (
            <form className='ui form'>
                <h3 className='ui dividing header'>Do You Have Enough Leads?</h3>
                <div className='field'>
                    <label>How much is the total comp for an SDR?</label>
                    <div className='fields'>
                        <div className='sixteen wide field'>
                            <LabeledTextField placeholder='The total annual cost in dollars' />
                        </div>
                    </div>
                    <label>Your organization's annualized average deal size?</label>
                    <div className='fields'>
                        <div className='sixteen wide field'>
                            <LabeledTextField placeholder='The amount in dollars' />
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default SdrCostForm;
