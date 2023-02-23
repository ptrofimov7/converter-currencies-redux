import { Edit } from '@mui/icons-material';
import React, { ReactNode } from 'react';
import MuiIconButton from '../../components/shared/MuiIconButton';

type ConverterTableEditCellProps = {
   children: ReactNode,
   currency: string,
   column: string,
   onClick: (currency: any, column: any) => void,
}

const ConverterTableEditCell = ({ currency, column, children, onClick }: ConverterTableEditCellProps) => {
   return (
      <>
         {children}
         <div className='editable-cell__actions'>
             <MuiIconButton
               p={0}
               color='warn'
               size='small'
               onClick={() => onClick(currency, column)}
               label='Cancel'
            >
               <Edit fontSize='small'/>
            </MuiIconButton>
          </div>
      </>
   );
};

export default ConverterTableEditCell;