import React, { useState } from 'react';
import { isUserValueValid } from './utils/validations';

type ConverterTableInputProps = {
   initialValue: number,
   defaultValue: number,
   currency: string,
   column: string,
   onApply: (value: any) => void,
   onCancel: () => void,
}

const ConverterTableInput = ({currency, column, defaultValue, initialValue, onApply, onCancel}: ConverterTableInputProps) => {
   const [value, setValue] = useState(defaultValue)
   return (
         <label className='table-input'>
            <input type="number" placeholder='Summa' value={value} onChange={(e: any) => setValue(e.target.value)}  />
            <div className='table-input__actions'>
               <button disabled={!isUserValueValid(value, initialValue)} onClick={() => {
                  onApply( {currency, column, value})
                  }}>О</button>
               <button onClick={() => {
                  onCancel()
               }}>С</button>
            </div>
         </label>
   );
};

export default ConverterTableInput;