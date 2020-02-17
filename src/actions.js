import Axios from 'axios';

export const SEARCH = 'SEARCH';
export const SELECT = 'SELECT';
export const RESULTS = 'RESULTS';
export const LOADING = 'LOADING';
export const SELECT_ART = "SELECT_ART";
export const CLEAR_LIST = 'CLEAR_LIST'

export function asyncActionGetResults(query) {
    return (dispatch, getState) => {
        dispatch(actionSearch(query));
        Axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${query}`)
        .then(apiResults => {
            const {results} = getState();
            console.log(`Got ${apiResults.data.objectIDs.length} results`)
            if (apiResults.data.objectIDs.length > results.length) {
                dispatch(actionSearch(query));
                dispatch(actionResults(apiResults.data.objectIDs));
            }
        })
    }
}

export function actionLoading(isLoading) {
    return {
        type: LOADING,
        payload: {
            isLoading
        }
    }
}

export function actionResults(results) {
    return {
        type: RESULTS,
        payload: {
            results
        }
    }
}

export function actionSearch(query) {
    return {
        type: SEARCH,
        payload: {query}
    }
}

export function asyncActionSelectArt(id) {
    // if you turn this into an async function, it automatically returns a promise, which redux no likey
    return (dispatch) => {
    Axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
    .then(apiResult => {
        dispatch(actionSelectArt(apiResult.data));
        dispatch(actionClearList());
    })
    .catch(err => {console.log(err)})
}
}

export function actionSelectArt(data) {
    return {
        type: SELECT_ART,
        payload: data
    }
}

export function actionSelect(id) {
    return {
        type: SELECT,
        payload: {id}
    }
}

export function actionClearList() {
    return {
        type: CLEAR_LIST
    }
}