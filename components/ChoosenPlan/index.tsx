import React, { useState } from 'react';
import * as Styled from './styles';
import { Cards } from '../Cards';
import { UsersDataForm } from '../UsersDataForm';
import { Plan } from '../../types/Plan';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContextData } from '../../types/User';

export const ChoosenPlan = () => {
  const [click, setClick] = useState(true);
  const [userData, setUserData] = useState<UserContextData>();

  const handleSearchSuccess = (data: UserContextData) => {
    setUserData(data);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const selectedPlan = location.state?.selectedPlan;

  const handleClick = () => {
    console.log(selectedPlan);
    console.log(userData);
    setClick(!click);
    if (selectedPlan && userData) {
      navigate('/payment', { state: { selectedPlan, userData } });
    }
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
              plans={[selectedPlan]}
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
