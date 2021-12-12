import React from 'react';
import PropTypes from "prop-types";

export const Indicator = ({status}) => {
    let classIndicator = ""

    if (status) {
        classIndicator = 'badge bg-success'
    }else{
        classIndicator = 'badge bg-info'
    }
    
    return (
        <span className={classIndicator}>{(status) ? 'COMPLETE' : 'PENDING'}</span>
    )
}

Indicator.propTypes = {
    status: PropTypes.bool.isRequired,
}

