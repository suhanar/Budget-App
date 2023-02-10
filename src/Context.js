import React,{createContext,useContext, useReducer} from 'react';




const reducer = (state,action)=>{
  switch(action.type){
    case'ADD_ITEM':
      return {...state,expense:[...state.expense,action.payload]}
    case'DELETE_ITEM':
      const filter = state.expense.filter((el)=> el.id!==action.payload.id);
      return {...state,expense:filter}
    case'EDIT':
       return {...state,budget:action.payload.budget}

    default:
      return state;
  }
}
const CustomContext = React.createContext();
export const AppProvider=({children})=>{

  
  const [state,dispatch] = useReducer(reducer,{
    budget : 2000,
    expense:[{id:Math.random,name:'Trip',cost:100}]
  })

  const val = {
    budget : state.budget,
    expense:state.expense,
    dispatch
  }

  return(
    <CustomContext.Provider value={val}>
         {children}
    </CustomContext.Provider>
  )
}

export function useCustomContext() {
  return React.useContext(CustomContext);
}

export default CustomContext;