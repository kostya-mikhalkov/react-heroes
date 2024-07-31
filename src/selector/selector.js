import { createSelector } from "reselect";

const getState = state => {
    console.log('render fire')
    return state.allHeroes};

export const selectorReduceFire = createSelector(
    getState,
    state => state.filter(item => item.element === 'fire')
)