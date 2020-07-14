let initialState = []

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_BLOGS':
            return [...action.payload]
        default:
            return state;
    }
}

export default blogReducer