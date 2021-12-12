import React, { HTMLAttributes } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
}

const Button = ({ variant, children, ...props }: ButtonProps) => {
  return <button {...props}>{children}</button>;
};

export default Button;
