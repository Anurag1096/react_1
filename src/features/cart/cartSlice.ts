import {createSlice,PayloadAction} from '@reduxjs/toolkit'


interface CartItem{
    id:number,
    title:string,
    price:number,
    quantity:number,

}

interface CartState{
    items:CartItem[],
    totalAmount:number,
}


const initialState:CartState={
    items:[],
    totalAmount:0
}


const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem(state,action:PayloadAction<CartItem>){
             const item={
                id:action.payload.id,
                title:action.payload.title,
                price:action.payload.price,
                quantity:action.payload.quantity,
             }
             state.items.push(item)
        },
        removeItem(state,action:PayloadAction<number>){
           //returns a full state object
           return{...state, items:state.items.filter((item)=>item.id !== action.payload)}
        },
        clearCart(state){

            return {
                ...state,
                items:[],
                totalAmount:0
            }
        },
        calculateTotal(state){
            const total=state.items.reduce((acc,crr)=> acc + crr.price * crr.quantity,0)
            return {...state, totalAmount:total,}
        },
    }
})


export const {addItem,removeItem,clearCart,calculateTotal}=cartSlice.actions;
export default cartSlice.reducer;