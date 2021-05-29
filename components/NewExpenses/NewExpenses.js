import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
   const onSaveExpenseDataHandler = (data) => {
      const newExpense = {
         ...data,
         id: Math.random().toString(),
      };
      console.log(newExpense);
      props.onAddExpense(newExpense);
   };

   const [isEditing, setIsEditing] = useState(false);

   const startEditing = () => {
      setIsEditing(true);
   };

   const stopEditing = () => {
      setIsEditing(false);
   };

   return (
      <div className="new-expense">
         {!isEditing && (
            <button onClick={startEditing} type="button">
               Add a new Expense
            </button>
         )}
         {isEditing && (
            <ExpenseForm
               onCancel={stopEditing}
               onSaveExpenseData={onSaveExpenseDataHandler}
            />
         )}
      </div>
   );
};

export default NewExpense;
