import React, { useState, useEffect, useRef } from 'react';
import { Container } from './styled';

export function Form(props) {
const [task, setTask] = useState(props.edit ? props.edit.value:'');

const taskRef = useRef(null)

useEffect(() => {
    taskRef.current.focus()
})

const handleChange = e => {
    setTask(e.target.value)
}

const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
    id:Math.random(),
    text: task
    })

    setTask('');
}

return (
    <Container onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            placeholder='Atualize a tarefa'
            value={task}
            onChange={handleChange}
            name='text'
            ref={taskRef}
            className='input edit'
          />
          <button onClick={handleSubmit} className='button edit'>
            Atualizar
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Adicione uma tarefa'
            value={task}
            onChange={handleChange}
            name='text'            
            ref={taskRef}
          />
          <button onClick={handleSubmit}>
            Adicionar
          </button>
        </>
      )}
    </Container>
  );
}