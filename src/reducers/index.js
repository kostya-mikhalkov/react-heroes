const initialState = {
    allHeroes: [],
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
                allHeroes: action.payload,
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
                allHeroes: state.allHeroes.filter(item => item.id !== action.payload),
                heroes: state.heroes.filter(item => item.id !== action.payload),
                id: action.payload
            }
        case 'HEROES_PUSHED':
            return {
                ...state,
                heroes: [...state.heroes, action.payload],
                allHeroes: [...state.heroes, action.payload],
            }
        case 'FILTER_FIRE':
            return {
                ...state,
                heroes: state.allHeroes.filter(item => item.element == 'fire'),
            }
        case 'FILTER_WATER':
            return {
                ...state,
                heroes: state.allHeroes.filter(item => item.element == 'water'),
            }
        case 'FILTER_WIND':
            return {
                ...state,
                heroes: state.allHeroes.filter(item => item.element == 'wind'),
            }
        case 'FILTER_EARTH':
            return {
                ...state,
                heroes: state.allHeroes.filter(item => item.element == 'earth'),
            }
        case 'FILTER_ALL':
            console.log('render all')
            return {
                ...state,
                heroes: state.allHeroes,
            }
        default: return state
    }
}

export default reducer;