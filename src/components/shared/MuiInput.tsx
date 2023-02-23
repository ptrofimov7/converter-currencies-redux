import { FormControl, Input, InputLabel } from '@mui/material';
import React from 'react';

type MuiInputProps = {
   label: string,
   id: string,
   type: string,
   value: string | number,
   readOnly?: boolean,
   onChange: (v: any) => void
}

const MuiInput = ({ label, id, type, value, readOnly = false, onChange }: MuiInputProps) => {
   return (
      <FormControl variant="standard">
         <InputLabel htmlFor={id}>{label}</InputLabel>
         <Input
            id={id}
            type={type}
            readOnly={readOnly}
            placeholder='Enter sum'
            value={value}
            onChange={(e) => {
               onChange(e.target.value)
            }} />
      </FormControl>
   );
};

export default MuiInput;