import React from 'react';
import { useCustomContext } from '../Context';

function Spent() {
    const {expense} = useCustomContext();

    const total = expense.reduce((acc,item)=>(acc+=item.cost),0)
  return (
    <div className='common spent'>
        <h4>Spent <span className='price'>${total}</span></h4>
    </div>
  )
}

export default Spent