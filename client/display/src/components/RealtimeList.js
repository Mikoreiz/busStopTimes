import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Predictions from './Predictions'

class RealtimeList extends Component {
    render() {
        const {rt} = this.props
        let pred
        
        if (rt.destinations[0].predictions) {
            pred = rt.destinations[0].predictions.map((pr, i) => (
                <Predictions key={i} pr={pr} rt={rt}/>
            ))
        }
        
    return (
        <Fragment>
            {pred}
        </Fragment>
    )
    }
    
}

RealtimeList.propTypes = {
    rt: PropTypes.array.isRequired
}

export default RealtimeList