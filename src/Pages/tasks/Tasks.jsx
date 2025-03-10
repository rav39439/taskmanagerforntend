import React from 'react'

import  { useState } from "react";
import Acard from '../../components/Acard/Acard';

import './Task.css'
const Tasks = (props) => {
    const [loading, setloading] = useState(false)
  return (
<div className="container">
<h1>Welcome to Taskmanager</h1>

            {props.tasks.length > 0 && loading === false ? (

              <div className="task-grid">

                {props.tasks.map((task, index) => (
                  <div className="col-md-3 mt-2" key={index}>
                    <Acard task={task} addtask={props.addtask} currentUser={props.currentUser} />
                  </div>
                ))}
              </div>
            ) : (
              <h1>No Tasks</h1>
            )}
          </div>

  )
}

export default Tasks