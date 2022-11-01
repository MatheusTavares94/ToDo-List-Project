import React, { useState } from 'react';
import { Form } from '../Form';
import { Container } from './styled';
import { X, Check, Pencil } from 'phosphor-react'


export function Tasks({ todos, completeTodo, deleteTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    };

    if (edit.id) {
        return <Form edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo, id) => (
        <Container>
            <div className={todo.isChecked ? 'row checked' :
                'row'} key={id} >

                <div key={todo.id} >
                    {todo.text}
                </div>

                <div >
                    <button onClick={() => completeTodo(todo.id)}
                        ><Check size={24} /></button>
                    <button onClick={() => setEdit({ id: todo.id, value: todo.text })}
                       ><Pencil size={24} /></button>
                    <button onClick={() => deleteTodo(todo.id)}
                       ><X size={24} /></button>

                </div>
            </div>
        </Container>
    ))

}  