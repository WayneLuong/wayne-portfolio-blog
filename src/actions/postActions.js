import axios from 'axios'
import { homeLink } from '../App'

//Actions
export const getCat = (categories) => {
    return async function (dispatch, getState) {
        //const res = await axios.get(`${window.location.origin}${homeLink}/wp-json/wp/v2/categories/${categories}`)
        const arr = categories.map(category => {
            axios.get(`${window.location.origin}${homeLink}/wp-json/wp/v2/categories/${category}`)
                .then(res => {
                    //console.log(res.data)
                })
        })
        //console.log(arr)
        dispatch({
            type: 'GET_CAT',
            payload: ''
        });
    }
};

//Actions
export const getPost = (id) => {
    return async function (dispatch, getState) {
        //const res = await axios.get(`${window.location.origin}${homeLink}/wp-json/wp/v2/categories/${categories}`)
        const post = await axios.get(`${window.location.origin}${homeLink}wp-json/wp/v2/posts/${id}`)
        dispatch({
            type: 'GET_POST',
            payload: post.data
        });
    }
};