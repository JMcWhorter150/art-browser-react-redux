import {connect} from 'react-redux';
import ArtDisplay from '../components/ArtDisplay';

function mapStateToProps(state) {
    return {
        title: state.art.currentResult.title,
        year: state.art.currentResult.objectDate,
        artist: state.art.currentResult.artistDisplayName,
        src: state.art.currentResult.primaryImageSmall,
    }
}

const reduxConnector = connect(mapStateToProps);
export default reduxConnector(ArtDisplay);