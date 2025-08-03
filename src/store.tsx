import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counter/counterSlice'
import todoReducer from './features/todo/todoSlice'
import themeReducer from './features/theme/themesSlice'
import notificationsReducers from "./features/notifications/notificationSlice"
export const store=configureStore({
    reducer:{
        counter:counterReducer,
        todo:todoReducer,
        theme:themeReducer,
        notification:notificationsReducers,
    }
})


export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch;

