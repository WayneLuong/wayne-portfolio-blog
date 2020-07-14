let initialState = {
    categories: [],
    post: {}
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CAT':
            return []
        case 'GET_POST':
            return action.payload
        default:
            return state;
    }
}

export default postReducer