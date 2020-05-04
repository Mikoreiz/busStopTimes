import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import Departure from './Departure'
import { connect } from 'react-redux'
import { getDepartures } from '../actions/departures'
import '../departure.css'


class DepartureTimes extends Component {
    componentDidMount() {
        this.props.getDepartures()
    }
    
    render() {
        const {departures, loading} = this.props.departures
        let departureTimes
        
        if (departures === null || loading) {
            departureTimes = <h1>No departures at this time</h1>
        } else {
            departureTimes = departures.data.map((dep, i) => (
                <Departure key={i} dep={dep}/>
            ))
        }
    return (
        <div style={{"backgroundColor":"#eaeaea"}}>
            <meta http-equiv="refresh" content="60"/>
            <div className="heading">
                <h4 className="title">DEPARTURES</h4>
                <h4 className="titleTime">{moment().format('h:mm A')}</h4>
            </div>
            <table>
                <tbody>
                    {departureTimes}
                </tbody>
            </table>
        </div>
    )
    }
}

DepartureTimes.propTypes = {
    getDepartures: PropTypes.func.isRequired,
    departures: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    departures: state.departures
})

export default connect(
    mapStateToProps,
    { getDepartures }
)(DepartureTimes)

