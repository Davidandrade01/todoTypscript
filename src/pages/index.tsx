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

  return (
    <div>
      <Header/>


     <main  className={styles.main}>
      
      <Taskform btnText="Criar tarefa" tasklist={tasklist} setTasklist={setTaskList}/>

      <Tasklist tasklist={tasklist}/> 

    
      </main>
      <Footer/>
    
    </div>
  )
} 
