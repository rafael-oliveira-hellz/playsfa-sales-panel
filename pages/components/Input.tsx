import { useEffect, useRef } from 'react';
import Input from './Input.style';

type InputProps = {
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoFocus: boolean;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};
const InputComponent = ({
  className,
  value,
  onChange,
  autoFocus,
  onKeyDown
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onEnter = (e: any) => {
    e.target.focus();
  };
  useEffect(() => {
    window.addEventListener('load', () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    });
  }, []);

  return (
    <>
      <Input className={className}>
        <label htmlFor='email'>
          E-mail
        </label>
        <input
          type='email'
          id='email'
          autoFocus={autoFocus}
          onChange={onChange}
          value={value}
          ref={inputRef}
          onMouseEnter={onEnter}
          onKeyDown={onKeyDown}
          placeholder='Digite seu e-mail cadastrado'
        />
      </Input>
    </>
  );
};

export default InputComponent;
