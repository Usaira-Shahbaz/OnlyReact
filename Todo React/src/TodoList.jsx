import { useState } from "react";

export default function TodoList() {
    let [todos, setTodos] = useState([{ id: 0, task: "Sleep", isDone : false }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        if (newTodo.trim() !== "") {
            setTodos((prevTodos) => [
                ...prevTodos,
                { id: prevTodos.length, task: newTodo, isDone:false }
            ]);
            setNewTodo("");
        }
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    let upperCase = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => ({ ...todo, isDone:true }))
        );
    };

    let updateTodo = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => 
                todo.id === id ? { ...todo, isDone:true } : todo
            )
        );
        
    };

    return (
        <>
            <label htmlFor="task">Enter Task: </label>
            <input
                id="task"
                type="text"
                placeholder="Enter Task"
                onChange={updateTodoValue}
                value={newTodo}
            /><br/><br/>
            <button onClick={addNewTask}>Add Task</button>
            <br/><br/>
            <hr/>
            <h4>Todo Application</h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={todo.isDone ? { textDecoration: "line-through" } : {}}>
                            {todo.task}
                        </span>
                         &nbsp; &nbsp;&nbsp; &nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>&nbsp; &nbsp;
                        <button onClick={() => updateTodo(todo.id)}>Mark Done</button>
                       
                    </li>
                ))}
            </ul>

            <button onClick={upperCase}>Mark Done All!!!</button>
            
        </>
    );
}
