import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {setTotalComp} from './actions/actions.js';
import SdrCostForm from './components/sdr-cost-form.jsx';
import HungrySdrChart from './components/hungry-sdr-chart.jsx';
import Masthead from './components/masthead.jsx';
import sdrCalcApp from './reducers/reducers';


let store = createStore(sdrCalcApp, {
        sdrForm: {
            totalComp: 54000,
            acv: 2000,
            grossMargin: 70,
            profit: 1.2
        },
        ratesForm: {
            winRates: [10, 25, 33],
            conversionRates: [10, 25, 33]
        }
    }
);


renderForm();

function renderForm() {
    render(
        <Provider store={store}>
            <div className='pusher'>
                <Masthead/>
                <div className='ui vertical stripe segment'>
                   <div className='ui middle aligned stackable grid container'>
                       <div className='row'>
                           <div className='ten wide column'>
                               <h3 className='ui header'>SDR Success is About Leads</h3>
                               <p>When you boil it down the success of your SDR team depends on the number of 
                               prospects you put in front of them. I've created this calculator to help you figure 
                               out how many leads you will need to achieve the  desired ROI on a fully ramped SDR.
                               </p>
                           </div>
                           <div className='six wide right floated column'>
                               <div className='ui inverted raised segment grid container'>
                                   <SdrCostForm 
                                        onSdrCompChanged={text => dispatch(setTotalComp(text))}
                                   />
                               </div>
                           </div>
                       </div>
                   </div>
                </div>
                <div className='ui vertical stripe segment'>
                    <div className='ui middle aligned stackable grid container'>
                        <div className='row'>
                            <div className='sixteen wide column'>
                                <h2>How Hungry is Your SDR?</h2>
                            </div>
                        </div>
                        <HungrySdrChart />
                    </div>
                </div>
            </div>
        </Provider>
 , document.getElementById('ReactContainer'));    
}
