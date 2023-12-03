const { createSlice } = require("@reduxjs/toolkit");

const userSlice=createSlice({

name:"user",
initialState:{
    userName:null,
    userEmail:null
},
reducers:{
    setUserName(state,action){

        const {payload}=action
        state.userName=payload;
    },  
    setUserEmail(state,action){
        const {payload}=action
        state.userEmail=payload;
    }
}
})

export const {setUserName,setUserEmail}=userSlice.actions
export default userSlice.reducer