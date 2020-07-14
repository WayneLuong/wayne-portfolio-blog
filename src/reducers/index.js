import blogReducer from './blogReducer'
import postReducer from './postReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    blogs: blogReducer,
    singlePost: postReducer,
    projects: projectReducer
})

export default allReducers