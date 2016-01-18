export const SET_TOTAL_COMP = "SET_TOTAL_COMP"

export function setTotalComp(comp) {
    console.log("made it over here:", comp);
    return {
        type: SET_TOTAL_COMP,
        comp
    }
}
