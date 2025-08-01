import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counter/counterSlice'
import todoReducer from './features/todo/todoSlice'
import themeReducer from './features/theme/themesSlice'

export const store=configureStore({
    reducer:{
        counter:counterReducer,
        todo:todoReducer,
        theme:themeReducer,
    }
})


export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch;

