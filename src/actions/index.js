import { createAction } from "@reduxjs/toolkit";

export const fetchHeroes = (request) => (dispatch) => {
    dispatch(heroesFetching());
    request("http://localhost:3001/heroes")
        .then(data => dispatch(heroesFetched(data)))
        .catch(() => dispatch(heroesFetchingError()))
}

export const heroesFetching = createAction('HEROES_FETCHING')

export const heroesFetched = createAction('HEROES_FETCHED')

export const heroesFetchingError = createAction('HEROES_FETCHING_ERROR');

export const heroesDeleted = createAction('HEROES_DELETED')

export const heroesPushed = createAction('HEROES_PUSHED');

export const filterFire = createAction('FILTER_FIRE');

export const filterWater = createAction('FILTER_WATER')

export const filterWind = createAction('FILTER_WIND')

export const filterEarth = createAction('FILTER_EARTH')

export const filterAll = createAction('FILTER_ALL')