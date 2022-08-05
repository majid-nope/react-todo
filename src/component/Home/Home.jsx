import React from 'react'
import './Home.css'
import { AddCircleOutline } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import ToDoTask from './ToDoTask';
import { v4 as uuidv4 } from 'uuid';

function Storage(){
  let task = localStorage.getItem('task')
  if(task){
    return JSON.parse(task)
  }
  return []
}



function Home() {
 

  const [ToDo, setToDo] = useState(Storage());
  const [text, setText] = useState('');

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(ToDo))
  }, [ToDo]);

//[{id,text}]
  function AddToDoTask() {
    if (text) {
      let id = uuidv4()
      setToDo(ToDo => [...ToDo, { id: id, text: text }])
      setText('')

    }
  }
//Event Handle, useEffect, useState,props,map
  function onCheck(e) {
    setTimeout(() => {


      let id = e.target.parentNode.dataset.uid
      console.log(ToDo)
      setToDo(ToDo.filter((el => el.id !== id)))



    }, 300)
  }
  return (
    <div className="home">
      <div className='inputItems'>
        <input value={text} onChange={(e) => { setText(e.target.value) }} type="text" placeholder="Add you Text" />
        <AddCircleOutline className='addCircle' fontSize='large' onClick={AddToDoTask} />
      </div>
      <div className="input-holder d-flex">
        <ToDoTask task={ToDo} check={onCheck} />
      </div>
    </div>
  )
}

export default Home
