import {connect} from 'react-redux';
import { actionSetFavorite } from '../actions';
import FavoriteList from '../components/FavoriteList';

function mapStateToProps(state) {
    return {
        favorites: state.favorites.favorites
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleClick: (id) => {
            dispatch(actionSetFavorite(id))
        }
    }
}

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
export default reduxConnector(FavoriteList);