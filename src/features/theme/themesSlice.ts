import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ThemeDark= boolean

const initialState: ThemeDark=false


const ThemeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme(state, action: PayloadAction<boolean>) {
            return action.payload
        },
        toggleTheme(state,action: PayloadAction<boolean>){
            return !state
        },        
    }
});


export const {setTheme,toggleTheme}= ThemeSlice.actions
export default ThemeSlice.reducer;
