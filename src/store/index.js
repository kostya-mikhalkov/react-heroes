import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import reducer from '../slice/sliceHeroes';
import { thunk } from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';

const enchancersDummy = (createStore) => {
    return (reducer, state, enchancer) => {
        const store = createStore(reducer, state, enchancer)

        const newDispatch = (action) => {
            const disp = store.dispatch(action);
            if (typeof action.type === 'string') {
                console.log('This is string')
            }
            if (typeof action.type === 'number') {
                console.log('This is NUMBER')
            }
            // console.log(action)
            return disp
        }

        return {
            ...store,
            dispatch: newDispatch
        }
    }
}

// const juniorMiddleware = (store) => (next) => (action) => {
//     console.log('This is action', action);
//     console.log('next state', store.getState());
//     if (action.type === 'HEROES_PUSHED') {
//     // Предполагаем, что action.payload является массивом
//         const newState= store.getState().heroes.filter(item => item.id !== 1)
//         const newAction = {
//             ...action,
//             payload: newState
//         }
//         return next(newAction)
//     }
//     return next(action)
// }

const asyncMiddleware = ({dispatch, getState}) => (next) => (action) => {
    if (typeof action === 'function') {
        return action(dispatch)
    }
    return next(action)
}

// const enchancersDummy = (createStore) => (reducer, state, enchancer) => {
//     const store = createStore(reducer, state, enchancer)
//     const newDispatch = (action) => {
//         // Если тип действия HEROES_PUSHED, модифицируем payload
//         if (action.type === 'HEROES_PUSHED') {
//             // Предполагаем, что action.payload является массивом
//             const newPayload = action.payload.filter(item => item.id !== 1);
//             const newAction = { ...action, payload: newPayload };
//             return store.dispatch(newAction);
//         }
//         return store.dispatch(action);
//     };
//     return {
//         ...store,
//         dispatch: newDispatch
//     }

// }


// const store = createStore(reducer, applyMiddleware(asyncMiddleware));
const store = configureStore({reducer})
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


export default store;