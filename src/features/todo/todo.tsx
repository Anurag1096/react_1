
import { useAppDispatch, useAppSelector } from "../../hooks"
import React, { useState } from 'react'
import { addTodo, toggleTodo, removeTodos } from "./todoSlice"


const Todo = () => {
    const todoList = useAppSelector((state) => state.todo)
    const dispatch = useAppDispatch()
    const [text, setText] = useState<string>("")
    function handleSubmit(e:any) {
        e.preventDefault()
        dispatch(addTodo(text))
        setText("")
    }

    return (<>
        <form onSubmit={handleSubmit}>
            <label htmlFor="text">Create Todo</label>
            <input id='text' type='text' value={text} onChange={(e) => setText(e.target.value)} />
            <button type="submit">Add Todo</button>
        </form>
        <div>
            {todoList.map((todo) => {
                return (
                    <div key={todo.id}>
                        <p>{todo.text}</p>
                        <span>{todo.completed ? "✅" : "❌"}</span>
                        <button onClick={()=>dispatch(toggleTodo(todo.id))}>Toggle</button>
                        <button onClick={()=>dispatch(removeTodos(todo.id))}>Delete Todo</button>
                    </div>
                )
            })}
        </div>
    </>
    )

}


export default Todo;