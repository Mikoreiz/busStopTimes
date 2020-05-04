import { combineReducers } from "redux"
import departures from "./departures"
import realtime from "./realtime"

export default combineReducers({
    departures,
    realtime
})