import { createSlice } from "@reduxjs/toolkit"


const initialState = { 
    
    
    menuData: {
        menu: [],
        name: '',
        cuisines: '',
        rating: 0,
        ratings: 0,
        time: '',
        address: '',
      },
      cartData:[], 
      favouriteData:[]
}
export const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        allMenu: (state,action)=>{
            state.menuData = action.payload
        },
        addItemHandler:(state, action)=>{
            state.cartData.push(action.payload)
        },
        incrementItem:(state,action)=>{
            state.cartData = state.cartData.map((x, index)=>{
                if(index == action.payload){
                    return {...x, quantity: x.quantity+1}
                }else{
                    return x
                }
            })
        },
        decrementItem:(state, action)=>{
            state.cartData = state.cartData.map((x,index)=>{
                if(index == action.payload){
                    return {...x, quantity: x.quantity-1}
                }else{
                    return x
                }
            })
        }, 
        removeItem:(state, action)=>{
            state.cartData.splice(action.payload, 1)
        },
        handleFavourite:(state, action)=>{
            state.favouriteData.push(action.payload)
        },
        removeHeart:(state,action)=>{
            state.favouriteData.splice(action.payload,1)
        }
    }
})

export const {allMenu, incrementItem, decrementItem, removeItem, addItemHandler,handleFavourite,removeHeart} = CounterSlice.actions
export default CounterSlice.reducer