import axios from 'axios'
import { homeLink } from '../App'

//Actions
export const getProjects = () => {
    return async function (dispatch, getState) {
        const res = await axios.get(`${window.location.origin}${homeLink}wp-json/wp/v2/projects`);
        dispatch({
            type: 'GET_PROJECTS',
            payload: res.data
        });
    }
};