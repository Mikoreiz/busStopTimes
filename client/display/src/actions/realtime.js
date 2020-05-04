import axios from 'axios'
import { GET_REALTIME, REALTIME_ERROR } from './types'

export const getRealtime = () => async dispatch => {
    try {
        const res = await axios.get('http://api.transitime.org/api/v1/key/165221d/agency/san-joaquin/command/predictions?s=7003&s=7006&s=7017&s=7025&s=7258&format=json')
        dispatch({
            type: GET_REALTIME,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: REALTIME_ERROR,
            payload: { msg: 'Error' }
        })
    }
}