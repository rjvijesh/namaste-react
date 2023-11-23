import {createSlice, current} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state, action) => {
            console.log(state);
            console.log(current(state));
            //state.items.length=0;
            state = []; // changing the local copy but it will not change the original copy
            console.log(state);

            return {items: []};//will replace this new object inside original state with {items: []}
            //RTK - mutate the state or return the new state
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;