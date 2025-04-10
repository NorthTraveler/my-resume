
import { createSlice } from '@reduxjs/toolkit'

export const Statechange = createSlice({
    name:"ContentInput",
    initialState:{
        value:{
            top:{
                name:"输入名字",
                phone:"输入电话",
                email:"输入邮箱",
                address:"输入地址",
                company:"",
            },
            education:{

            }
        },
    },
    reducers:{
        NameChange:(state, action) => {
            state.value.top.name = action.payload
        },
        clearAll:(state) =>{
            state.value.top.name = ""
        }
    }
})

export const {NameChange, clearAll} = Statechange.actions
export default Statechange.reducer