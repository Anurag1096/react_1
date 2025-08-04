import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counter/counterSlice'
import todoReducer from './features/todo/todoSlice'
import themeReducer from './features/theme/themesSlice'
import notificationsReducers from "./features/notifications/notificationSlice"
import authReducers from './features/auth/authSlice'
export const store=configureStore({
    reducer:{
        counter:counterReducer,
        todo:todoReducer,
        theme:themeReducer,
        notification:notificationsReducers,
        auth:authReducers
    }
})


export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch;

