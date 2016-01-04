import {combineReducers} from 'redux'
import {SET_TOTAL_COMP} from '../actions/actions'

function totalComp(state = {}, action) {
    switch(action.type) {
        case SET_TOTAL_COMP: 
            return Object.assign({}, state, {
                totalComp: action.comp
            })
        default: 
            state
    }
}

const sdrCalcApp = combineReducers({
    totalComp
})

export default sdrCalcApp
