import {combineReducers} from 'redux'
import {SET_TOTAL_COMP, SET_ACV} from '../actions/actions'

function totalComp(state = {}, action) {
    switch(action.type) {
        case SET_TOTAL_COMP: 
            return Object.assign({}, state, {
                totalComp: action.comp
            });
        default: 
            return state;
    }
}

function acv(state = {}, action) {
    switch(action.type) {
        case SET_ACV: 
            return Object.assign({}, state, {
                acv: action.acv
            });
        default: 
            return state;
    }
}

const sdrCalcApp = combineReducers({
    totalComp, 
    acv
});

export default sdrCalcApp
