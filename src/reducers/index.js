const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: [],
    id: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case 'HEROES_DELETED':
            return {
                ...state,
                heroes: state.heroes.filter(item => item.id !== action.payload),
                id: action.payload
            }
        case 'HEROES_PUSHED':
            return {
                ...state,
                heroes: [...state.heroes, action.payload],
            }
        default: return state
    }
}

export default reducer;