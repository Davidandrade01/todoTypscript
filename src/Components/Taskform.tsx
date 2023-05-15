import React from 'react'
import {useState,ChangeEvent,FormEvent,useEffect } from "react"


//Interfaces

import { ITask } from "@/interfaces/task"

//Styles

import  styles from '../styles/taskform.module.css'

interface Props{
    btnText:string,
    tasklist:ITask[],
    setTasklist?:React.Dispatch<React.SetStateAction<ITask[]>>
    handleUpdate?():null
}

const Taskform = ({btnText,tasklist,setTasklist,handleUpdate}:Props) => {

  const [id,setId]=useState<number>(0)
  const[title,setTitle]=useState<string>("")
  const[difficulty,setDifficulty]=useState<number>(0)

  const addTaskhandler =(e:FormEvent<HTMLFormElement>)=>{

   if(handleUpdate){
    console.log(handleUpdate)

   }
   else{
    e.preventDefault()
    const id=Math.floor(Math.random()*1000) //Geração de Id assim que submeter/clicar
    const newTask:ITask={id, title,difficulty  }

   setTasklist!([...tasklist,newTask])
   setTitle("")
   setDifficulty(0) 
   }
   console.log(tasklist)
  }

  const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
    if(e.target.name==="title"){
      setTitle(e.target.value)
    }

    else{
      setDifficulty(parseInt(e.target.value))
    }

    console.log(title)
    console.log(difficulty)
  }



  return (
    <form onSubmit={addTaskhandler} className={styles.form} >
        <div className={styles.input_container}>
        <label className={styles.input_container_label} htmlFor='title'>Título</label>
        <input onChange={handleChange} className={styles.form_input} 
        type='text'name='title' placeholder='Título da tarefa ' value={title}></input>
        </div>

        <div className={styles.input_container}>
        <label className={styles.input_container_label}  htmlFor='difficulty'>Dificuldade</label>
        <input onChange={handleChange}  className={styles.form_input} 
        type='text'name='difficulty' placeholder='Dificuldade da tarefa ' value={difficulty}></input>
        </div>

            <input className={styles.form_input} type="submit" value={btnText} />

    </form>
  )
}

export default Taskform
