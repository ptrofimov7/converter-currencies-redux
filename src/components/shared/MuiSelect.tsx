import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';

type MuiSelectProps = {
   data: Array<string>,
   value: string | number,
   onChange: (value: string | number) => void
}

const MuiSelect = ({ data, value, onChange }: MuiSelectProps) => {
   return (
      <FormControl variant="standard" sx={{ minWidth: 120, height: '100%', justifyContent: 'flex-end' }}>
         <Select
            value={value}
            onChange={(e) => {
               onChange(e.target.value)
            }}
         >
            {
               data.map(el => {
                  return (
                     <MenuItem key={el} value={el}>{el}</MenuItem>
                  )
               })
            }
         </Select>
      </FormControl>
   );
};

export default MuiSelect;