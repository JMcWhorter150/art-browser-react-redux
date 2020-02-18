import { SEARCH, SELECT, RESULTS, LOADING, SELECT_ART, CLEAR_LIST, ADD_FAVORITE, REM_FAVORITE, SELECT_FAVORITE} from "./actions";
import {combineReducers} from 'redux';

const defaultState = {
    query: '',
    results: [],
    currentResult: {},
    isLoading: false
}

function art(state=defaultState, action) {
    switch(action.type) {
        case SEARCH:
            // maybe? we do axios here?
            // nope, turns into some weird promise states
            return {
                ...state,
                query: action.payload.query
            }
        case SELECT:
            return {
                ...state,
            }
        case RESULTS:
            return {
                ...state,
                results: action.payload.results
            }
        case LOADING:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        case SELECT_ART:
            return {
                ...state,
                currentResult: action.payload
            }
        case CLEAR_LIST:
            return {
                ...state,
                results: []
            }
        default:
            return {
                ...state
            }
    }
}


const favoritesState = {
    currentFavorite: 0,
    favorites: Object.keys(window.localStorage).map(key => window.localStorage.getItem(key))
};


function favorites(state=favoritesState, action) {
    const newState = {...state};

    switch(action.type) {
        case ADD_FAVORITE:
            newState.favorites.push(action.payload);
            window.localStorage.setItem(newState.favorites.length - 1, action.payload);
            break;
        case REM_FAVORITE:
            window.localStorage.removeItem(action.payload);
            newState.favorites.splice(action.payload, 1);
            break;
        case SELECT_FAVORITE:
            newState.currentFavorite = action.payload;
            break;
        default:
            break;
    }

    return newState;
}

const reducers = combineReducers({art, favorites})

export default reducers;