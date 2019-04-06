import { ADD_MODEL } from '../actions/addModel'

const initialState = []

export default (state = initialState, action = {}) => {
    switch(action.type) {
    case ADD_MODEL:
        return [
            ...state,
            action.payload
        ]
    default:
        return state
    }
}