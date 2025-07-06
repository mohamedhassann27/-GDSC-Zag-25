const { createStore, combineReducers} = require("redux")
const initialState={
    loading: true,
    data: [],
    error: ""
};

const FETCH_USERS_REQUEST= "FETCH_USERS_REQUEST"
const FETCH_USERS_SUCCESS= "FETCH_USERS_SUCCESS"
const FETCH_USERS_FAILURE= "FETCH_USERS_FAILURE"

const fetchUsersRequest= (users)=>{
    return{
        type: FETCH_USERS_REQUEST,
    }
}

const fetchUsersSuccess= (users)=>{
    return{
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure= (error)=>{
    return{
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

const reducer= (state= initialState, action)=>{
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading: true,
            }
        case FETCH_USERS_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: "",
            }
        case FETCH_USERS_FAILURE:
            return{
                loading: false,
                data: [],
                error: action.payload,
            }
    }
}

const store= createStore(reducer)
console.log(store.getState())




// const { thunk } = require("redux-thunk")
// const fetchUsers= ()=>{
//     return async function(dispatch){
//         dispatch(fetchUsersRequest())
//         try{
//             const response=await fetch("https://jsonplaceholder.typicode.com/users/1")
//             let data= await response.json()
//             dispatch(fetchUsersSuccess(data))
//         }catch (error){
//             dispatch(fetchUsersFailure(error.message))
//         }
//     }
// }

// let store= createStore(reducer, applyMiddleware(thunk))
// store.dispatch(fetchUsers())
// store.subscribe(()=>console.log(store.getState()))
