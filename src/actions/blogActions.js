import axios from 'axios'
import { homeLink } from '../App'

//Actions
export const getBlogs = () => {
    return async function (dispatch, getState) {
        const res = await axios.get(`${window.location.origin}${homeLink}wp-json/wp/v2/posts`);
        dispatch({
            type: 'GET_BLOGS',
            payload: res.data
        });
    }
};