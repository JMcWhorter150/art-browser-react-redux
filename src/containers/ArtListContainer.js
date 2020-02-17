import {connect} from 'react-redux';
import ArtList from '../components/ArtList';
import { actionSelect, asyncActionSelectArt } from '../actions';

function mapStateToProps(state) {
    return {
        artList: state.art.results
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleSelect: (id) => dispatch(asyncActionSelectArt(id))
    }
}

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
export default reduxConnector(ArtList);