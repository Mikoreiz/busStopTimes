import { GET_DEPARTURES, DEPARTURES_ERROR } from '../actions/types'

const initialState = {
    departures: [],
    repos: [],
    loading: true,
    error: {}
}

export default function(state = initialState, action) {
    const { type, payload } = action
    
    switch(type) {
        case GET_DEPARTURES: 
            return { 
                ...state,
                departures: payload,
                loading: false
            }
        case DEPARTURES_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        default: 
            return state
    }
}