import React from "react";
import styles from './Todos.module.css';
import { v4 } from 'uuid';
import { TodoList } from "./TodoList";
// import { Completed } from "./Completed";
const Todos = () => {
    const [newTodo, setNewTodo] = React.useState("");
    const [todo, setTodo] = React.useState([]);
    const [completedList, setCompletedList] = React.useState([]);
     const [show ,setShow] = React.useState(false);
    const handleChange = (e) => {
        e.preventDefault();
        setNewTodo(e.target.value);

    }
    const setTaskList = (e) => {

        if (e.key === "Enter") {

            setTodo([...todo, { id: v4(), name: newTodo, status: false }]);
            setNewTodo("");
        }

    }

    const handleDelete = (id) => {

        let newList = todo.filter((el) => el.id !== id);
        setTodo(newList);
    }

    const complete = () => {
        
        if(show === false){
            setShow(true);

        }
        else{
            setShow(false);

        }
     
    }

return (
    <div className={styles.main}>
        <div >
            <input type="input" placeholder=" + Create new Todo" value={newTodo} onKeyDown={setTaskList} onChange={handleChange} />
        </div>
        <div className={styles.list}>
            <TodoList todo={todo} setTodo={setTodo} handleDelete={handleDelete} completedList={completedList} setCompletedList={setCompletedList} />
        </div>
        <div>
            <div style={{margin:"auto"}}>
                <button onClick={complete} style={{ cursor: "pointer", width: "90%" ,marginBottom:"10px" }} disabled={completedList.length === 0}>
                    <h3>Completed Todo List</h3>
                </button>
                <div style={{backgroundColor:"#ffe6d5",padding:"20px"}}>
                    {show ? 
                        completedList.map((item) => (
                           
                             <div key={item.id} style={{width:"80%",border:"1px solid black", backgroundColor:"white", margin:"auto", textDecoration:"line-through" }}>{item.name}</div>
                           )) : null}
                </div>

            </div>
        </div>
    </div>
)
}

export default Todos;