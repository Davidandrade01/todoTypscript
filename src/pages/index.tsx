
//Components
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Taskform from "@/Components/Taskform";
import Tasklist from "@/Components/Tasklist";


import styles from '../styles/main.module.css'


export default function Home() {
  return (
    <div>
      <Header/>


     <main  className={styles.main}>
      
      <Taskform btnText="criar tarefa"/>

      <Tasklist/> 

    
      </main>
      <Footer/>
    
    </div>
  )
} 
