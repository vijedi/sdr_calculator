import React from 'react';
import {render} from 'react-dom';
import SdrCostForm from './components/sdr-cost-form';
import Masthead from './components/masthead';

renderForm();

function renderForm() {
    render(
            <div className='pusher'>
                <Masthead/>
                <div className='ui vertical stripe segment'>
                   <div className='ui middle aligned stackable grid container'>
                       <div className='row'>
                           <div className='eight wide column'>
                               <h3 className='ui header'>SDR Success is About Leads</h3>
                               <p>When you boil it down the success of your SDR team depends on the number of 
                               prospects you put in front of them. I've created this calculator to help you figure 
                               out how many leads you will need to achieve the  desired ROI on a fully ramped SDR.
                               </p>
                           </div>
                           <div className='six wide right floated column'>
                               <div className='ui inverted raised segment grid container'>
                                   <SdrCostForm />
                               </div>
                           </div>
                       </div>
                   </div>
                </div>
            </div>
 , document.getElementById('ReactContainer'));    
}
