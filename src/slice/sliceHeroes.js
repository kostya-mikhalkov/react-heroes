import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allHeroes: [],
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: [],
    id: null,
    activeFilter: 'all'
}

const heroesSlice = createSlice({
    name: 'heroes',
    initialState,
    reducers: {
        heroesFetching: (state) => {
            state.heroesLoadingStatus = 'loading'
        },
        heroesFetched: (state, action) => {
            state.allHeroes = action.payload;
            state.heroes = action.payload;
            state.heroesLoadingStatus = 'idle';
        },
        heroesFetchingError: (state) => {
            state.heroesLoadingStatus = 'error'
        },
        heroesDeleted: (state, action) => {
            state.allHeroes = state.allHeroes.filter(item => item.id !== action.payload)
            state.heroes = state.heroes.filter(item => item.id !== action.payload)
            state.id = action.payload
        },
        heroesPushed: (state, action) => {
            state.heroes.push(action.payload);
            state.allHeroes.push(action.payload);
        },
        filterFire: state => {
            state.activeFilter = 'fire'
        },
        filterAll: state => {
            state.activeFilter = 'all'
        },
        filterEarth: state => {
            state.activeFilter = 'earth'
        },
        filterWater: state => {
            state.activeFilter = 'water'
        },
        filterWind: state => {
            state.activeFilter = 'wind'
        }
    }
})
const {actions, reducer} = heroesSlice;
export default reducer
export const { heroesFetching, 
               heroesFetched, 
               heroesFetchingError, 
               heroesDeleted,
               heroesPushed,
               filterAll,
               filterEarth,
               filterWater,
               filterWind,
               filterFire
               } = actions;