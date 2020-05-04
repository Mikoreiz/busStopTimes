import axios from 'axios'
import { GET_REALTIME, REALTIME_ERROR } from './types'

export const getRealtime = () => async dispatch => {
    try {
        const res = await axios.get('')
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