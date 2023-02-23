import React, { ReactNode } from 'react';

type ButtonProps = {
   children: ReactNode,
   onClick: (e: any) => void
}

const Button = ({ children, onClick }: ButtonProps) => {
   return (
      <button onClick={onClick}>
         {children}
      </button>
   );
};

export default Button;