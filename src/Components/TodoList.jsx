import React from 'react';
import { TodoItem } from './TodoItem';


const TodoList = ({ todo, handleDelete,setCompletedList,completedList ,setTodo}) => {

    return (
        <div>

            {todo.map((task) => (

                <TodoItem task={task} handleDelete={handleDelete} key={task.id} setTodo={setTodo} todo={todo} completedList={completedList} setCompletedList={setCompletedList} />


            ))}
        </div>
    )
}

export { TodoList };