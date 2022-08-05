import React from 'react'
import { Checkbox } from '@mui/material'

function ToDoTask(props) {
  let ToDoLists = props.task
  
  

  let elements = ToDoLists.map(el =>
    <div key={el.id} className="todo-item">
      <Checkbox  onChange={props.check} data-uid={el.id} className="check"/>
      <p className="text">{el.text}</p>
    </div>
  )

  return (
    <div className="li">{ elements }</div>
    
  )
}

export default ToDoTask
