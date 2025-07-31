import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface TodoState{
    id:number,
    text:string,
    completed:boolean
}

const initialState:TodoState[]=[]

const todoSlice= createSlice({
    name:"todo",
    initialState,
    reducers:{
      addTodo(state,action:PayloadAction<string>){
     const newTodo:TodoState={
            id:Date.now(),
            text:action.payload,
            completed:false,
        };
        state.push(newTodo)
      },
      toggleTodo(state,action:PayloadAction<number>){
         const todo=state.find(todo=> todo.id === action.payload)
         if(todo){
            todo.completed=!todo.completed
         }
      },
      removeTodos(state,action:PayloadAction<number>){
        return state.filter((todo)=> todo.id !== action.payload)
      },
    }

})


export const {addTodo,removeTodos,toggleTodo}= todoSlice.actions
export default todoSlice.reducer