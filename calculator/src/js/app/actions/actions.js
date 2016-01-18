export const SET_TOTAL_COMP = "SET_TOTAL_COMP"
export const SET_ACV = "SET_ACV"
export const SET_GROSS_MARGIN = "SET_GROSS_MARGIN"
export const SET_PROFIT = "SET_PROFIT"

export function setTotalComp(comp) {
    return {
        type: SET_TOTAL_COMP,
        comp
    }
}

export function setAcv(acv) {
    return {
        type: SET_ACV,
        acv 
    }
}

export function setGrossMargin(grossMargin) {
    return {
        type: SET_GROSS_MARGIN,
        grossMargin
    }
}

export function setProfit(profit) {
    return {
        type: SET_PROFIT,
        profit
    }
}

