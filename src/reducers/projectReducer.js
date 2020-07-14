let initialState = []

const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PROJECTS':
            return [...action.payload]
        default:
            return state;
    }
}

export default projectReducer