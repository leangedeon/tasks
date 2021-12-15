import React, { useState } from 'react';
import { Task } from "../components/Task"
import { useFetch } from '../customHooks';
import { TASK_NUMBER, TASK_DEFAULT, API } from '../constants'

export const List = () => {

    const [quantity, setQuantity] = useState(TASK_DEFAULT);
    const { data, error, loading } = useFetch(`${API}/tasks/${quantity}`)

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4 p-4">
                    <select 
                        className="form-select" 
                        onChange={(e) => setQuantity(e.target.value)}
                        value={quantity}
                    >
                        {
                            TASK_NUMBER.map(n => (<option value={n+1} key={n+1}>{n+1}</option>))
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
                    (!data || loading) ?
                        <div style={{'textAlign':'center'}}>
                            <h3 className="center">Loading...</h3>
                        </div>
                    :
                        data.map(task => (
                            <Task task={task} key={task.task_id}/>
                        ))
                }
            </div>
        </div>
    )

}