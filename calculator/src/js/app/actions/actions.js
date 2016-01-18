export const SET_TOTAL_COMP = "SET_TOTAL_COMP"
export const SET_ACV = "SET_ACV"

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
