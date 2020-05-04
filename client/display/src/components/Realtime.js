import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RealtimeList from './RealtimeList'
import { connect } from 'react-redux'
import { getRealtime } from '../actions/realtime'

class Realtime extends Component {
    componentDidMount() {
        this.props.getRealtime()
    }
    render() {
        const {realtime} = this.props.realtime
        let realtimes
        
        if(realtime.predictions) {
            realtimes = realtime.predictions.map((rt, i) => (
                <RealtimeList key={i} rt={rt}/>
            ))
        }
    
        return (
            <div>
                {realtimes}
            </div>
        )
    }
}

Realtime.propTypes = {
    getRealtime: PropTypes.func.isRequired,
    realtime: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    realtime: state.realtime
})

export default connect(
    mapStateToProps,
    { getRealtime }
)(Realtime)

