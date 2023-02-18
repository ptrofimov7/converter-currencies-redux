import React, { useRef } from 'react';

type ConverterTableInputProps = {
   defaultValue: number,
   currency: string,
   column: string,
   onApply: (value: any) => void,
   onCancel: () => void,
}

const ConverterTableInput = ({currency, column, defaultValue, onApply, onCancel}: ConverterTableInputProps) => {
   const ref = useRef<HTMLInputElement>(null)
   return (
         <label className='table-input'>
            <input type="number" placeholder='Summa' ref={ref} defaultValue={defaultValue}  />
            <div className='table-input__actions'>
               <button onClick={() => {
                  onApply( {currency, column, value: ref.current ? ref.current.value : 0})
                  }}>О</button>
               <button onClick={() => {
                  onCancel()
               }}>С</button>
            </div>
         </label>
   );
};

export default ConverterTableInput;