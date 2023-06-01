import React, { useContext, useState } from 'react';
import * as Styled from './styles';
import { Cards } from '../Cards';
import { UsersDataForm } from '../UsersDataForm';
import { Plan } from '../../types/Plan';
import { UserContextData } from '../../types/User';
import { PlanContext, UserContext } from '../../contexts/Provider';
import { useRouter } from 'next/router';

export const ChoosenPlan = () => {
  const [click, setClick] = useState(true);

  const router = useRouter();

  const planContext = useContext(PlanContext);
  const userContext = useContext(UserContext);

  if (!planContext || !userContext) {
    console.error('A context was not found');
    return null;
  }

  const selectedPlan  = sessionStorage.getItem('selectedPlan');

  const JSONSelectedPlan = JSON.parse(selectedPlan as string);

  const { user, setUser } = userContext;

  if (!selectedPlan) {
    console.error('A plan was not found');
    router.push('/');
  }

  const handleSearchSuccess = (data: UserContextData) => {
    setUser(data);
  };

  console.log(selectedPlan);

  const handleClick = () => {
    console.log(selectedPlan);
    console.log(user);
    setClick(!click);

    router.push('/payment');
  };

  return (
    <>
      <Styled.ChoosenPlanWrapper>
        <section className='plan-cards-wrapper'>
          <div className='title-wrapper'>
            <h2>Plano Escolhido</h2>
          </div>
          {/* FAZER A TELA DE SELEÇÃO ENTRE PIX E CARTÃO */}
          <div className='plan-cards'>
            <Cards
              showModal={click}
              setShowModal={setClick}
              plans={[JSONSelectedPlan]}
              onButtonClick={handleClick}
            />
          </div>
        </section>
        <section className='user-search'>
          <div className='title-wrapper'>
            <h2>Usuário</h2>
          </div>
          <UsersDataForm onSearchSuccess={handleSearchSuccess} />
        </section>
      </Styled.ChoosenPlanWrapper>
    </>
  );
};
