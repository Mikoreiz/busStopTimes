import React, { Component, Fragment } from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import '../departure.css'

class Departure extends Component {
    componentDidMount() {
        this.props.getRealtime()
    }
    render() {
        const {dep} = this.props
        
        let d = new Date()
        let [h, m, s] = dep.departure_time.split(':')
        d.setHours(+h)
        d.setMinutes(m)
        d.setSeconds(s)
        let departUnix = moment(d.toString()).unix()
        
        let desc
        if (dep.trip_headsign !== "") {
            desc = dep.trip_headsign
        } else {
            desc = dep.route_long_name
        }
        let time
        if (Math.round((moment().unix() - departUnix)/-60) < 3) {
            time = <td className="departure_time" style={{"color":"red"}}>Now</td>
        } else {
            time = <td className="departure_time">{Math.round((moment().unix() - departUnix)/-60) + " min"}</td>
        }
        
        return (
            <Fragment>
                <tr className="departure">
                    <td className="route_id" style={{"backgroundColor":"#" + dep.route_color}}>{dep.route_id}</td>
        <td className="long_name">{dep.stop_id}{" "}{dep.trip_id}</td>
                    {time}
                </tr>
            </Fragment>
        )
    }   
}

Departure.propTypes = {
    dep: PropTypes.object.isRequired
}

export default Departure

