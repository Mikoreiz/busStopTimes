import { GET_REALTIME, REALTIME_ERROR } from '../actions/types'

const initialState = {
    realtime: [],
    repos: [],
    loading: true,
    error: {}
}

export default function(state = initialState, action) {
    const { type, payload } = action
    
    switch(type) {
        case GET_REALTIME: 
            return { 
                ...state,
                realtime: payload,
                loading: false
            }
        case REALTIME_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        default: 
            return state
    }
}