import './Expenses.css';
import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from '../filter/ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
   const [filteredYear, setFilterYear] = useState('2021');

   const filterChangeHandler = (year) => {
      setFilterYear(year);
   };

   const filteredExpenses = props.items.filter((item) => {
      return item.date.getFullYear().toString() === filteredYear;
   });

   return (
      <div>
         <Card className="expenses">
            <ExpensesFilter
               selected={filteredYear}
               onChangeFilter={filterChangeHandler}
            />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
         </Card>
      </div>
   );
};

export default Expenses;
