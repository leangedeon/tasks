import React from 'react';
import PropTypes from "prop-types";

export const Indicator = ({status}) => {
    const classIndicator = (status) ? 'badge bg-success' : 'badge bg-info'
    
    return (
        <span className={classIndicator}>{(status) ? 'COMPLETE' : 'PENDING'}</span>
    )
}

Indicator.propTypes = {
    status: PropTypes.bool.isRequired,
}

