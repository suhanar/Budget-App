import React, { useState } from 'react';
import { useCustomContext } from '../Context';
import Search from './Search';

function Expenses() {
    const {expense,dispatch} = useCustomContext();
    const [search,setSearch] = useState('')

    const handleClick = ()=>{
        
    }
  
  return (
    <div className='expenses'>
        <h2>Expenses</h2>
        <Search search={search} setSearch={setSearch}/>

        {expense.filter((val)=>{
      if(search == ''){
        return val
      }else if( val.name.toLowerCase().includes(search.toLowerCase())){
        return val;
      }
     }).map((el,key)=>{
      return (<div className='expenses-map'>
      <div>
      <span>{el.name}</span>
      </div>
      <div>
      <span>{el.cost}</span>
      </div>
      <div >
          <button className='del' onClick={()=>dispatch({type:'DELETE_ITEM',payload:{id:el.id}})}><i class="fa fa-trash" aria-hidden="true"></i></button>
      </div>
      
      
  </div>)
})}





        {/* {
            expense.map((el)=> (
                <div className='expenses-map'>
                    <div>
                    <span>{el.name}</span>
                    </div>
                    <div>
                    <span>{el.cost}</span>
                    </div>
                    <div >
                        <button className='del' onClick={()=>dispatch({type:'DELETE_ITEM',payload:{id:el.id}})}>X</button>
                    </div>
                    
                    
                </div>
            ))
        } */}

    </div>
  )
}

export default Expenses