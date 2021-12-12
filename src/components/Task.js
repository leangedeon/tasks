import React, { useState } from 'react';
import { Modal } from "./Modal"
import { Indicator } from "./Indicator"
import PropTypes from "prop-types";
const API = "http://localhost:5000/api";

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
        const options = {  headers: { 'Content-Type': 'application/json' }, method: 'POST', body: JSON.stringify({'status': !status})};
        const data = await fetch(`${API}/task/${taskId}`, options);
        const dataJSON = await data.json();
        return dataJSON;
    }

    const onComplete = async (e) => {
        const updatedTask = await checkCompletedTask(e.target.value)        
        setStatus(!status)
        onClose()
    }

    return (
        <div className="col-md-4" style={{'padding':'10px', 'cursor': 'pointer'}} onClick={handleClick}>
            <div className="card border-secondary">
            <div className="card-header">Task #{task.task_id}</div>
                <div className="card-body">
                    <h4>{task.name}</h4>
                    <p>#{task.task_id}</p>
                    <Indicator status={status} />
                </div>
            </div>
            {
                (active) && 
                    <Modal task={task} key={task.task_id} onClose={onClose} onComplete={onComplete} />
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