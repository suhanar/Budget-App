import React, { useState } from 'react';
import { useCustomContext } from '../Context';

function Budget() {

    const {budget,dispatch} = useCustomContext()
    const [edit,setEdit]=useState(false);
    const [val,setVal] = useState(budget)

    const handleClick1 = ()=>{

        setEdit(true); 
        

    }
    const handleClick2 = ()=>{

        setEdit(false); 
        dispatch({type:'EDIT',payload:{budget:val}})

    }
    
    
  return (
    <div className='common budget'>

        {
            !edit? <>
                 <h4>Budget <span className='price'>${budget}</span></h4>
                 <button onClick={handleClick1} >
                Edit</button>
            </> : 
            <>
             <input value={val} onChange={(e)=>setVal(e.target.value)} />
                <button onClick={handleClick2}>Save</button>
            </>
               
           
        }
       
    </div>
  )
}

export default Budget