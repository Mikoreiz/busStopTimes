import React, { Component, Fragment } from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'

class Predictions extends Component {
    render() {
        const {pr, rt} = this.props
        let time = Math.round((moment().unix() - pr.time)/-60)
        
    return (
        <Fragment>
            <p>{rt.routeName}{" | "}{rt.stopId}{" | "}{pr.trip}{" | "}{time}</p>
        </Fragment>
    )
    }
    
}

Predictions.propTypes = {
    pr: PropTypes.object.isRequired
}

export default Predictions