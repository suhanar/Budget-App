import React from 'react';
import { useCustomContext } from '../Context';


function Remaining() {
    const {budget,expense} = useCustomContext();

    const remaining = expense.reduce((acc,item)=>(acc += item.cost),0)
     const total = budget-remaining;
    const alertClass = remaining > budget ? 'alert' : 'notalert';
  


  return (
    <div className={`common remaining ${alertClass}`}>
        <h4>Remaining <span className='price'>${total}</span></h4>
    </div>
  )
}

export default Remaining