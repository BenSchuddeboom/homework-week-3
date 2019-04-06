import React from 'react'
import PropTypes from 'prop-types'

export const ModelDetails = (props) => {
    const { manufacturer, origin, year, name } = props.model
    return (
        <ul>
            <li>Name: {name}</li>
            <li>Manufacturer: {manufacturer}</li>
            <li>Origin: {origin}</li>
            <li>Year: {year}</li>
        </ul>
    )
}

//It made more sense to me to send in the whole model object and destructure it here.
ModelDetails.propTypes = {
    model: PropTypes.object.isRequired,
}