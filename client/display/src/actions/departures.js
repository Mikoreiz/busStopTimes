import axios from 'axios'
import { GET_DEPARTURES, DEPARTURES_ERROR } from './types'

export const getDepartures = () => async dispatch => {
    try {
        const res = await axios.get('http://localhost:3001/departureTimes/')
        dispatch({
            type: GET_DEPARTURES,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: DEPARTURES_ERROR,
            payload: { msg: 'Error' }
        })
    }
}