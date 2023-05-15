
import React from 'react'
import {AiTwotoneEdit} from 'react-icons/ai'
import {BsTrash3} from 'react-icons/bs'

//Iterfaces

import { ITask } from '@/interfaces/task'

//Styles
import styles from '../styles/tasklist.module.css'




interface Props{
  tasklist:ITask[]
  handleDelete(id:number):void
  handleUpdate?():null
}

export default function Tasklist({tasklist,handleDelete}:Props) {
  return (
    <>
   {tasklist.length>0?(

  
    
    tasklist.map((task)=>(
      
      <div key={task.id} className={styles.task}>
       
      <div className={styles.task_details}>
        <h4 className={styles.task_details_h4}>{task.title}</h4>
        <p>Dificuldade:{task.difficulty}</p>
      </div>

   <div className={styles.task_action}>
     
     <BsTrash3 onClick={()=>{handleDelete(task.id)}} className={styles.task_icons}/>
   </div>


      </div>
    ))
   ):(<p>Sem tarefas cadastradas</p>)}
    </>
  )
}
