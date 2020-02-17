import { SEARCH, SELECT, RESULTS, LOADING, SELECT_ART, CLEAR_LIST} from "./actions";

const defaultState = {
    query: '',
    results: [],
    currentResult: {},
    isLoading: false
}
export function art(state=defaultState, action) {
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