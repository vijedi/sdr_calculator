import React from 'react';
import {render} from 'react-dom';

renderForm();

function renderForm() {
    render(<SdrCostForm />, document.getElementById('SdrCostForm'));    
}
