import { IconButton } from '@mui/material';
import React, { ReactNode } from 'react';

type MuiIconButtonProps = {
   children: ReactNode,
   color?: any,
   size: any,
   label: string,
   disabled?: boolean,
   p?: number,
   onClick: (e: any) => void
}

const MuiIconButton = ({children, onClick, color = 'default', label, disabled=false, p=1, size}: MuiIconButtonProps) => {
   return (
      <IconButton
      sx={{p}}
      size={size}
      onClick={onClick}
      color={color}
      aria-label={label}
      disabled={disabled}
      >{ children }
      </IconButton>
   );
};

export default MuiIconButton;