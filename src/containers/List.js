import React, { useEffect, useState } from 'react';
import { Task } from "../components/Task"
import range from 'lodash/range';

const TASK_NUMBER = range(10);
const TASK_DEFAULT = 3;
const API = "http://localhost:5000/api";

export const List = () => {

    const [tasks, setTasks] = useState([]);
    const [quantity, setQuantity] = useState(TASK_DEFAULT);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(async () => {
        getTasks(quantity);
    }, []);

    const getTasks = async (quantity) => {
        setLoading(true);
        
        const response = await fetch(`${API}/tasks/${quantity}`)
        const tasks = await response.json()
        
        if (quantity && tasks.error) {
            return setError(tasks.error)
        }
        setError('');
        setTasks(tasks);
        setLoading(false);
    }
    
    const handleSubmit = (e) => {
        setQuantity(e.target.value)
        getTasks(e.target.value);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4 p-4">
                    <select 
                        className="form-select" 
                        onChange={handleSubmit}
                        value={quantity}
                    >
                        {
                            TASK_NUMBER.map(n => {
                                return (<option value={n+1} key={n+1}>{n+1}</option>)
                            })
                        }
                    </select>
                    {
                        (error) && 
                        <p className="text-white">{error}</p>
                    }
                </div>
            </div>    
            <div className="row">
                {
                    (loading) ? 
                        <div style={{'textAlign':'center'}}>
                            <h3 className="center">Loading...</h3>
                        </div>
                    :
                        tasks.map(task => (
                            <Task task={task} key={task.task_id}/>
                        ))
                }
            </div>
        </div>
    )

}