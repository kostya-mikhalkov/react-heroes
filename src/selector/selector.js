import { createSelector } from "reselect";

const getState = state => {
    return state.allHeroes
};
const getFilter = state => state.activeFilter;

export const selectorReduceFire = createSelector(
    [getState, getFilter],
    (heroes, filter) => {
        console.log('hi')
        if (filter === 'all') {
            return heroes;
        } else {
            return heroes.filter(item => item.element === filter)
        }
    }
)