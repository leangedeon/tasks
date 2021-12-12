import React, { useState } from 'react';
import { Modal } from "./Modal"
import { Indicator } from "./Indicator"
import PropTypes from "prop-types";
const API = 'http://run.mocky.io/v3/bcf27a76-e7d2-435d-9e98-703d89b3d709';

export const Task = ({task}) => {

    const [active, setActive] = useState(false);
    const [status, setStatus] = useState(false);

    const handleClick = (e) => {
        if(e.target.name !== 'close' && e.target.name !== 'status') {
            setActive(true)
        }
    }

    const onClose = () => {
        setActive(!active)
    }

    const checkCompletedTask = async (taskId) => {

        // const options = {  headers: { 'Content-Type': 'application/json' }, method: 'POST', body: JSON.stringify({'task_id': taskId})};
        // const data = await fetch(`${API}/game/${gameId}/move/${position}`, options);
        // const dataJSON = await data.json();
        // return dataJSON;
        return true
    }

    const onComplete = async (e) => {
        const updatedTask = await checkCompletedTask(e.target.value)        
        setStatus(!status)
        onClose()
    }

    return (
        <div className="col-md-4" style={{'padding':'10px', 'cursor': 'pointer'}} onClick={handleClick}>
            <div className="card border-secondary">
            <div className="card-header">Task #{task.id}</div>
                <div className="card-body">
                    <h4>{task.name}</h4>
                    <p>#{task.id}</p>
                    <Indicator status={status} />
                </div>
            </div>
            {
                (active) && 
                    <Modal task={task} key={task.id} onClose={onClose} onComplete={onComplete} />
            }
        </div>
    )
}

Task.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string
    }).isRequired
}