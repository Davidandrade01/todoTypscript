
import React from 'react'

//Iterfaces

import { ITask } from '@/interfaces/task'

//Styles



interface Props{
  tasklist:ITask[]
}

export default function Tasklist({tasklist}:Props) {
  return (
    <>
   {tasklist.length>0?(
    tasklist.map((task)=>(
      <div key={task.id}><p>{task.title}</p></div>
    ))
   ):(<p>Sem tarefas cadastradas</p>)}
    </>
  )
}
