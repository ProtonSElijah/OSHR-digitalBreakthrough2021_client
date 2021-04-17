import {combineReducers} from 'redux'

import teacherReducer from './teacher-reducer'

const reducers = combineReducers({
    teacherState: teacherReducer
})

export default reducers