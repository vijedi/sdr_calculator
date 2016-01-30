import {combineReducers} from 'redux'
import {SET_TOTAL_COMP, SET_ACV, SET_GROSS_MARGIN, SET_PROFIT, 
        SET_CONVERSION_RATE, SET_WIN_RATE} from '../actions/actions'

function sdrForm(state = {}, action) {
    switch(action.type) {
        case SET_TOTAL_COMP: 
            return Object.assign({}, state, {
                totalComp: action.comp
            });
        case SET_ACV: 
            return Object.assign({}, state, {
                acv: action.acv
            });
        case SET_GROSS_MARGIN: 
            return Object.assign({}, state, {
                grossMargin: action.grossMargin
            });
        case SET_PROFIT: 
            return Object.assign({}, state, {
                profit: action.profit
            });
        case SET_CONVERSION_RATE: 
            return Object.assign({}, state, {
                conversionRate: action.conversionRate
            });
        case SET_WIN_RATE:
            return Object.assign({}, state, {
                winRate: action.winRate
            });
        default: 
            return state;
    }
}

function ratesForm(state = {}, action) {
    switch(action.type) {
        default: 
            return state;
    }
}

const sdrCalcApp = combineReducers({
    sdrForm,
    ratesForm
});

export default sdrCalcApp
