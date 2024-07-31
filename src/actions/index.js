export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const heroesDeleted = (id) => {
    return {
        type: 'HEROES_DELETED',
        payload: id
    }
}

export const heroesPushed = (data) => {
    return {
        type: 'HEROES_PUSHED',
        payload: data
    }
}

export const filterFire = () => {
    return {
        type: 'FILTER_FIRE',
    }
}

export const filterWater = () => {
    return {
        type: 'FILTER_WATER',
    }
}

export const filterWind = () => {
    return {
        type: 'FILTER_WIND',
    }
}

export const filterEarth = () => {
    return {
        type: 'FILTER_EARTH',
    }
}

export const filterAll = () => {
    console.log('render')
    return {
        type: 'FILTER_ALL',
    }
}