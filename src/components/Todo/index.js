import React, { useState } from 'react';
import {Form} from '../Form';
import {Tasks} from '../Tasks';
import {Container} from './styled'

export function Todo() {
    const [todos, setTodos] = useState ([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [...todos,todo];

        setTodos(newTodos);        
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    }

    const deleteTodo = id => {
        const listWhitoutTheDeletedOne = [...todos].filter(todo => todo.id !== id)

        setTodos(listWhitoutTheDeletedOne);
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isChecked = !todo.isChecked;
            }
            return todo;
        });
        setTodos (updatedTodos);
    }

    return (
        <Container>
            <h1>Lista de Tarefas</h1>
            <Form onSubmit={addTodo} />
            <Tasks todos={todos} completeTodo={completeTodo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
        </Container>
    )
}