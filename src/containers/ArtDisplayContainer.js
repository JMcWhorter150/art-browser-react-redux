import {connect} from 'react-redux';
import ArtDisplay from '../components/ArtDisplay';
import { actionAddFavorite } from '../actions';

function mapStateToProps(state) {
    
    return {
        title: state.art.currentResult.title,
        year: state.art.currentResult.objectDate,
        artist: state.art.currentResult.artistDisplayName,
        src: state.art.currentResult.primaryImageSmall,
        objectID: state.art.currentResult.objectID
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleFavorite: (data) => dispatch(actionAddFavorite(data))
    }
}

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
export default reduxConnector(ArtDisplay);