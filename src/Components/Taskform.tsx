import React from 'react'

interface Props{
    btnText:string
}

const Taskform = ({btnText}:Props) => {
  return (
    <form  >
        <div>
        <label htmlFor='title'>Título</label>
        <input type='text'name='title' placeholder='Título da tarefa '></input>
        </div>

        <div>
        <label htmlFor='dificulty'>Dificuldade</label>
        <input type='text'name='title' placeholder='TDificuldade da tarefa '></input>
        </div>

            <input type="submit" value={btnText} />

    </form>
  )
}

export default Taskform
