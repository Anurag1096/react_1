import { createSlice,PayloadAction } from "@reduxjs/toolkit"

interface NotificationState{ 
    message:string,
    open:boolean,
    type: "Success" | "Error",
}

const initialState:NotificationState={
    message:"",
    open:false,
    type:"Error",
}


const notificationSlice=createSlice({
    name:'notification',
    initialState,
    reducers:{
        addNotifications(state,action:PayloadAction<{message:string,type:"Success"|"Error"}>){
            return {message:action.payload.message,open:true,type:action.payload.type}
        },
        clearNotifications(state){
            state.message=""
            state.open=false
            state.type="Error"
        }
    }
});


export const {addNotifications,clearNotifications}=notificationSlice.actions;
export default notificationSlice.reducer;