import React from 'react';
import styles from './TodoItem.module.css';
const TodoItem = ({ task, handleDelete,completedList,setCompletedList,setTodo,todo }) => {
const [isChecked , setIsChecked] = React.useState(false);


const handleComplete =(e)=>{

   setIsChecked(e.target.checked);
   if(task.status===false){
        task.status=true;
   }
   else{
    task.status=false;
   }
   console.log(task);
   setCompletedList([...completedList ,task]);

   setTimeout(()=>{let notcompleted = todo.filter((el) => el.status !== true);
   setTodo(notcompleted);
   console.log(notcompleted);
   },1000);

}

    return (
     
            <div className={styles.individual} key={task.id}>
                <div><input type="checkbox" checked={isChecked} onChange={(e)=>handleComplete(e)}  /></div>
                <div className={isChecked?styles.striked:null}>{task.name}</div>
                <div><button onClick={()=>handleDelete(task.id)}>Delete</button></div>
            </div>
      
    )
}

export { TodoItem };