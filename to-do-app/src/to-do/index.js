import { useState } from 'react';
import './styles.css';
import TodoForm from './TodoForm';


const ToDoApp=()=>{

    const [todoList,setTodoList]=useState([]);
    const [todoItem,setTodoItem]=useState('');
    const [editItem,setEditItem]=useState(null);
    const [updateItem,setUpdateItem]=useState(todoItem);

    const handleEdit=(index)=>{
        setEditItem(index);
        setUpdateItem(todoList[index]);
    }

    console.log(todoList,'todoList');


    const handleDelete=(index)=>{
        const newTodoList=todoList.filter((_,i)=>i!==index);
        setTodoList(newTodoList);
    }

    const handleAddItem=()=>{
        // if(editItem!==null){
        //     const updateList=[...todoList];
        //     updateList[editItem]=todoItem;
        //     setTodoList(updateList);
        //     setEditItem(null);
        // }
        // else{
        setTodoList([...todoList,todoItem]);
        // }
        setTodoItem('');
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleAddItem();
        }
    };

    const handleUpdateItem=()=>{
        const updateList=[...todoList];
        updateList[editItem]=updateItem;
        setTodoList(updateList);
        setEditItem(null);
    }

    const handlePressEnter=(event)=>{
        if(event.key==='Enter'){
            event.preventDefault();
            handleUpdateItem();
        }
    }

    return(
        <div className='main_container'>
            <h2>To Do</h2>
                <TodoForm 
                    todoList={todoList} 
                    setTodoList={setTodoList} 
                    todoItem={todoItem} 
                    setTodoItem={setTodoItem} 
                    handleAddItem={handleAddItem}
                    handleKeyDown={handleKeyDown}
                />
            <div>
            {todoList.map((item,index)=>(
                <li key={index} className='container'>
                    <input type='checkbox' className='checkbox'/>
                        {editItem===index ?
                        <>
                            <input className='item' type='text' value={updateItem} onChange={(e)=>setUpdateItem(e.target.value)} onKeyDown={handlePressEnter}/>
                            <button className='button' onClick={handleUpdateItem}>Update </button>
                            <button className='button' onClick={()=>setEditItem(null)}>Cancel</button>
                        </>
                    :
                    <>   
                    <div className='item'>                 
                     {item}
                     </div>
                     <button className='button' onClick={()=>handleEdit(index)}>Edit</button>
                     <button className='button' onClick={()=>handleDelete(index)}> Delete</button>
                    </>
            }   </li>
            ))}
          </div>
        </div>
    );
}
export default ToDoApp;