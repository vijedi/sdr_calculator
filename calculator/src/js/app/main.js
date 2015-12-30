import React from 'react';
import {render} from 'react-dom';
import SdrCostForm from './components/sdr-cost-form';

renderForm();

function renderForm() {
    render(<SdrCostForm />, document.getElementById('SdrCostForm'));    
}
