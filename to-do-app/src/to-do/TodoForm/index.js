
const TodoForm=({todoItem='',setTodoItem=()=>{}, handleKeyDown=()=>{}, handleAddItem=()=>{}})=>{

    const isValidInput = todoItem.trim()==='';

    return(
        <div className="container">
        <form >
            <input type="text" value={todoItem} onChange={(e)=>setTodoItem(e.target.value)} onKeyDown={handleKeyDown}/>
        </form>
        <button className='button' type="submit" onClick={handleAddItem} disabled={isValidInput}>Add</button>
    </div>
    )
}
export default TodoForm;