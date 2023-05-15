import React from 'react'
import {useState} from 'react'



//Components
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Taskform from "@/Components/Taskform";
import Tasklist from "@/Components/Tasklist";


//Styles
import styles from '../styles/main.module.css'
import { ITask } from '@/interfaces/task';



export default function Home() {

  const[tasklist, setTaskList]=useState<ITask[]>([])
  

  const deletTask=(id:number)=>{
    setTaskList(tasklist.filter(task=>{
      return task.id!==id
    }))
  }

  const updateTask=(id:number, title:string, difficulty:number)=>{
  const updateTask:ITask={id,title,difficulty}
  const updatedItems=tasklist.map(task=>{
     return task.id === updateTask.id ? updateTask :task
  })
  setTaskList(updatedItems)
  }
  return (
    <div>

      
      <Header/>


     <main  className={styles.main}>
      
      <Taskform btnText="Criar tarefa" tasklist={tasklist} setTasklist={setTaskList}/>

      <Tasklist tasklist={tasklist} handleDelete={deletTask}/> 


      
      </main>
      <Footer/>
    
    </div>
  )
} 
