const { createStore } = require("redux");

const BUY_CAKE="buy cake"
const BUY_ICECREAM="buy icecream"

function buyCake(){
    return {
        type:BUY_CAKE
    }
}
function buyIcecream(){
    return {
        type:BUY_ICECREAM
    }
}

let initialState={
    numOfCakes: 15,
    numOfIcecreams: 10
}

let reducer= (state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes-1
            }
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIcecreams: state.numOfIcecreams-1
            }
        default:
            return state
    }
}

let store=createStore(reducer)

console.log("Initial State",store.getState());

let unsbscribe= store.subscribe(()=>{
    console.log("Updated State" , store.getState());
})

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())

unsbscribe()

