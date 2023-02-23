import { Close, Done } from '@mui/icons-material';
import React, { useState } from 'react';
import MuiIconButton from '../../components/shared/MuiIconButton';
import { isUserValueValid } from './utils/validations';

type ConverterTableInputProps = {
   initialValue: number,
   defaultValue: number,
   currency: string,
   column: string,
   onApply: (value: any) => void,
   onCancel: () => void,
}

const ConverterTableInput = ({ currency, column, defaultValue, initialValue, onApply, onCancel }: ConverterTableInputProps) => {
   const [value, setValue] = useState(defaultValue)
   return (
      <label className='table-input'>
         <input type="number" placeholder='Sum' value={value} onChange={(e: any) => setValue(e.target.value)} />
         <div className='table-input__actions'>
            <MuiIconButton
               p={0}
               color='success'
               size='small'
               disabled={!isUserValueValid(value, initialValue)}
               onClick={() => {
                  onApply({ currency, column, value })
               }}
               label='Ok'
            ><Done fontSize='small'/>
            </MuiIconButton>
            <MuiIconButton
               p={0}
               color='error'
               size='small'
               onClick={() => onCancel()}
               label='Cancel'
            >
               <Close fontSize='small'/>
            </MuiIconButton>
          </div>
      </label>
   );
};

export default ConverterTableInput;