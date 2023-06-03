import React, { useState } from 'react';
import * as Styled from './styles';
import { apiUser } from '../../hooks/api';
import { UserContextData } from '../../types/User';
import { UserLoading } from '../UserLoading';

interface UsersDataFormProps {
  onSearchSuccess: (data: UserContextData) => void;
}

export const UsersDataForm: React.FC<UsersDataFormProps> = ({
  onSearchSuccess
}) => {
  const [email, setEmail] = useState('');
  const [user, setUser] = useState<UserContextData>();
  const [loading, setLoading] = useState(false);

  const handleInputMail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSearch = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await apiUser.post('/user', { email });
      setLoading(false);
      setUser(response.data);
      onSearchSuccess(response.data);
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <>
      <Styled.UsersDataForm>
        <input
          className='input-mail'
          name='email'
          type='email'
          value={email}
          placeholder='Digite seu email de usuário'
          onChange={handleInputMail}
        />
        <button className='button-submit' type='submit' onClick={handleSearch}>
          Pesquisar
        </button>
      </Styled.UsersDataForm>
      <Styled.ResultWrapper>
        {user ? (
          <>
            <p>
              Nome: <span>{user.user.name}</span>
            </p>
            <p>
              Email: <span>{user.user.email}</span>
            </p>
            <p>
              Premium: <span>{user.user.premuim ? 'Sim' : 'Não'}</span>
            </p>
            <p>
              Recorrência Ativa?{' '}
              <span>{user.recurrencyOrder?.active ? 'Sim' : 'Não'}</span>
            </p>
            <p>
              Quantidade de Recorrências:{' '}
              <span>
                {user.recurrencyOrder?.interval !== null &&
                user.recurrencyOrder?.interval > 0
                  ? user.recurrencyOrder?.interval
                  : 0}
              </span>
            </p>
            <p>
              Período de Recorrência:{' '}
              <span>
                {user.recurrencyOrder?.limit !== null &&
                user.recurrencyOrder?.limit > 0
                  ? user.recurrencyOrder?.limit
                  : 0}
              </span>
            </p>
          </>
        ) : user !== undefined ? (
          <p>Nenhum usuário encontrado.</p>
        ) : (
          ''
        )}
      </Styled.ResultWrapper>
      {loading ? (
        <UserLoading className='window-gradient' />
      ) : (
        <UserLoading className='closing' />
      )}
    </>
  );
};
