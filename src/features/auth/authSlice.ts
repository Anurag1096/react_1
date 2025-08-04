import { createSlice,PayloadAction } from "@reduxjs/toolkit";


interface AuthState{
    user:{name:string,email:string} | null;
    isAuthenticated:boolean;
}

const initialState:AuthState={
    user:null,
    isAuthenticated:false,
}


const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        login(state,action:PayloadAction<{name:string,email:string}>){
                return {
                    user:{name:action.payload.name,email:action.payload.email},
                    isAuthenticated:true
                }
        },
        logOut(state){
            // state.user=null
            // state.isAuthenticated=false
            // you can use the above style also but make sure that every implementation pattern is same.
            return {
                user:null,
                isAuthenticated:false,
            }
        }

    }
})

export const {login,logOut}=authSlice.actions
export default authSlice.reducer