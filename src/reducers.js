import { SEARCH, SELECT, RESULTS, LOADING} from "./actions";

const defaultState = {
    query: '',
    results: [],
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
    }
}