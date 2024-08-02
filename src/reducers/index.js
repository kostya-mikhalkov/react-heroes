import { createReducer } from "@reduxjs/toolkit";
import * as objAction from '../actions/index';
const initialState = {
    allHeroes: [],
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: [],
    id: null,
    activeFilter: 'all'
}

console.log(objAction)

const reducer = createReducer(initialState, (builder) => {
    builder
    .addCase(objAction.heroesFetching, (state) => {
        state.heroesLoadingStatus = 'loading';
    })
    .addCase(objAction.heroesFetched, (state, action) => {
        state.allHeroes = action.payload;
        state.heroes = action.payload;
        state.heroesLoadingStatus = 'idle';
    })
    .addCase(objAction.heroesFetchingError, state => {
        state.heroesLoadingStatus = 'error'
    })
    .addCase(objAction.heroesDeleted, (state, action) => {
        state.allHeroes = state.allHeroes.filter(item => item.id !== action.payload)
        state.heroes = state.heroes.filter(item => item.id !== action.payload)
        state.id = action.payload
    })
    .addCase(objAction.heroesPushed, (state, action) => {
        state.heroes.push(action.payload);
        state.allHeroes.push(action.payload);
    })
    .addCase(objAction.filterFire, state => {
        state.activeFilter = 'fire'
    })
    .addCase(objAction.filterAll, state => {
        state.activeFilter = 'all'
    })
    .addCase(objAction.filterEarth, state => {
        state.activeFilter = 'earth'
    })
    .addCase(objAction.filterWater, state => {
        state.activeFilter = 'water'
    })
    .addCase(objAction.filterWind, state => {
        state.activeFilter = 'wind'
    })
})

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'HEROES_FETCHING':
//             return {
//                 ...state,
//                 heroesLoadingStatus: 'loading'
//             }
//         case 'HEROES_FETCHED':
//             return {
//                 ...state,
//                 allHeroes: action.payload,
//                 heroes: action.payload,
//                 heroesLoadingStatus: 'idle'
//             }
//         case 'HEROES_FETCHING_ERROR':
//             return {
//                 ...state,
//                 heroesLoadingStatus: 'error'
//             }
//         case 'HEROES_DELETED':
//             return {
//                 ...state,
//                 allHeroes: state.allHeroes.filter(item => item.id !== action.payload),
//                 heroes: state.heroes.filter(item => item.id !== action.payload),
//                 id: action.payload
//             }
//         case 'HEROES_PUSHED':
//             return {
//                 ...state,
//                 heroes: [...state.heroes, action.payload],
//                 allHeroes: [...state.heroes, action.payload],
//             }
//         case 'FILTER_FIRE':
//             // return {
//             //     ...state,
//             //     heroes: state.allHeroes.filter(item => item.element == 'fire'),
//             // }
//             return {
//                 ...state,
//                 activeFilter: 'fire',
//             }
//         case 'FILTER_WATER':
//             // return {
//             //     ...state,
//             //     heroes: state.allHeroes.filter(item => item.element == 'water'),
//             // }
//             return {
//                 ...state,
//                 activeFilter: 'water',
//             }
//         case 'FILTER_WIND':
//             // return {
//             //     ...state,
//             //     heroes: state.allHeroes.filter(item => item.element == 'wind'),
//             // }
//             return {
//                 ...state,
//                 activeFilter: 'wind',
//             }
//         case 'FILTER_EARTH':
//             // return {
//             //     ...state,
//             //     heroes: state.allHeroes.filter(item => item.element == 'earth'),
//             // }
//             return {
//                 ...state,
//                 activeFilter: 'earth',
//             }
//         case 'FILTER_ALL':
//             console.log('render all')
//             // return {
//             //     ...state,
//             //     heroes: state.allHeroes,
//             // }
//             return {
//                 ...state,
//                 activeFilter: 'all',
//             }
//         default: return state
//     }
// }

export default reducer;