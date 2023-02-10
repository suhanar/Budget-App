import React from 'react'
import AddExpense from './component/AddExpense'
import Budget from './component/Budget'
import Expenses from './component/Expenses'
import Remaining from './component/Remaining'
import Spent from './component/Spent';
import './App1.css';
import { AppProvider } from './Context';
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Doughnut from './component/Doughnut'

function App() {
  return (
    <AppProvider>
    
        
    <div className='home'>
    
         
        <div className='home-div1'>
        <h2>Budget Planner</h2>
        <Budget />
        <Remaining />
        <Spent />
        </div>
        <div className='home-div2'>
         
            <Expenses />
       
            <AddExpense />
        </div>
       
    </div>
    </AppProvider>
  )
}

export default App