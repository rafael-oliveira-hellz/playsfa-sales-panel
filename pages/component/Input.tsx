import React from 'react';
import * as Styled from './styles';

type InputProps = {
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoFocus: boolean;
};
export const Input = ({
  className,
  value,
  onChange,
  autoFocus
}: InputProps) => {
  return (
    <>
      <Styled.Input className={className}>
        <label htmlFor='email' placeholder='Email'>
          E-mail
        </label>
        <input
          type='email'
          id='email'
          autoFocus={autoFocus}
          onChange={onChange}
          value={value}
        />
      </Styled.Input>
    </>
  );
};
