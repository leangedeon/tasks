import React from 'react';
import PropTypes from "prop-types";

export const Modal = ({task, onClose, onComplete}) => {

    return (
            <div className="modal" style={{'display':'block'}}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Task #{task.id}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" name="close" aria-label="Close" onClick={onClose}>
                        <span aria-hidden="true"></span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p> Name: {task.name}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-info" name="status" value={task.id} onClick={onComplete}>
                            Mark Complete
                        </button>
                        <button type="button" name="close" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onClose}>Close</button>
                    </div>
                    </div>
                </div>
            </div>
    )
}

Modal.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string
    }).isRequired,
    onClose: PropTypes.func.isRequired,
    onComplete: PropTypes.func.isRequired
}