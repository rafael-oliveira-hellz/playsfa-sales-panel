import { useEffect, useRef } from 'react';
import Input from './Input.style';

type InputProps = {
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoFocus: boolean;
};
const InputComponent = ({
  className,
  value,
  onChange,
  autoFocus
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
          placeholder='Digite seu e-mail cadastrado'
        />
      </Input>
    </>
  );
};

export default InputComponent;
