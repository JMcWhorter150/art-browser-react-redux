import {connect} from 'react-redux';
import ArtSearch from '../components/ArtSearch';
import { actionSearch, actionResults } from '../actions';
import Axios from 'axios';
const url = `https://collectionapi.metmuseum.org/public/collection/v1/search?q=sunflowers`;
function mapDispatchToProps(dispatch) {
    return {
        handleClick: async () => {
            const result = await Axios.get(url)
            console.log(result.data.objectIDs);
            dispatch(actionSearch("sunflowers"));
            dispatch(actionResults(result.data.objectIDs))
        }
    }
}

const reduxConnector = connect(null, mapDispatchToProps);

export default reduxConnector(ArtSearch);