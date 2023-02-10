import React,{useState} from 'react';
import { useCustomContext } from '../Context';

function AddExpense() {
    const [name,setName] = useState('');
    const [cost,setCost] = useState('');

    const {dispatch} = useCustomContext();
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch({type:'ADD_ITEM',payload:{id:Math.random(),name:name,cost:parseInt(cost)}})
        setName('');
        setCost('');
    }
  return (
    <div className='add-expense'>
        <h2>Add Expense</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name of your expense" value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="text" placeholder='Cost of your expense' value={cost} onChange={(e)=>setCost(e.target.value)} />
            <button>Save</button>
        </form>
    </div>
  )
}

export default AddExpense