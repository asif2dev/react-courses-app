import React,{useReducer} from 'react'
const initialState ={
    count:0
}

function reducer(state,action) {
    switch (action.type){
        case 'increment':
            return { count : state.count+1}
        case 'decrement':
            return { count : state.count-1}
        default:
            return state;
    }
}
const UseReducerComp = () => {
    const [state,dispatch] = useReducer(reducer,initialState);
  return (
    <div>
        Count: {state.count}
        <div><button onClick={()=>{dispatch({type:"increment"})}}>Increment</button></div>
        <div><button onClick={()=>{dispatch({type:"decrement"})}}>decrement</button></div>
    </div>
  )
}

export default UseReducerComp