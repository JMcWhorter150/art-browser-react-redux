import {connect} from 'react-redux';
import ArtSearch from '../components/ArtSearch';
import { asyncActionGetResults } from '../actions';

// const url = `https://collectionapi.metmuseum.org/public/collection/v1/search?q=sunflowers`;
function mapDispatchToProps(dispatch) {
    return {
        handleSubmit: (search) => {dispatch(asyncActionGetResults(search))}
        // handleClick: async () => {
        //     dispatch(actionLoading(true));
        //     const result = await Axios.get(url);
        //     console.log(result.data.objectIDs);
        //     dispatch(actionSearch("sunflowers"));
        //     dispatch(actionResults(result.data.objectIDs));
        //     dispatch(actionLoading(false));
        }
    }

const reduxConnector = connect(null, mapDispatchToProps);

export default reduxConnector(ArtSearch);