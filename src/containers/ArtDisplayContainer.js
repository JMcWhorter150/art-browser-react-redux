import {connect} from 'react-redux';
import ArtDisplay from '../components/ArtDisplay';

function mapStateToProps(state) {
    return {
        title: state.currentResult.title,
        year: state.currentResult.objectDate,
        artist: state.currentResult.artistDisplayName,
        src: state.currentResult.primaryImageSmall,
    }
}

const reduxConnector = connect(mapStateToProps);
export default reduxConnector(ArtDisplay);