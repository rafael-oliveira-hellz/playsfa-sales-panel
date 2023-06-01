import React, { useState, useEffect, useCallback } from 'react';
import * as Styled from './styles';
import { useNavigate } from 'react-router-dom';
import { Plan } from '../../types/Plan';
import { Cards } from '../../components/Cards';
// import { ChoosenPlan } from '../../components/ChoosenPlan';
// import { PaymentModal } from '../../components/PaymentModal';
import { api } from '../../api/api';
import { MainLoading } from '../../components/MainLoading';
export default function MainPage() {
  const [loading, setLoading] = useState(false);
  const [plans, setPlans] = useState<Plan[]>();
  const [selectedPlan, setSelectedPlan] = useState<Plan>({
    id: 0,
    name: 'string',
    description: 'string',
    price: 'string',
    billet_price: 'string',
    pix_price: 'string',
    normal_picture_url: 'string',
    billet_picture_url: 'string',
    pix_picture_url: 'string',
    stripe_plan_id: 'string',
    stripe_price_id: 'string',
    pack_duration: 'string',
    created_at: 'string',
    updated_at: 'string'
  });

  const navigate = useNavigate();

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get('/plansAll');
      setLoading(false);

      setPlans(response.data);
    } catch (error) {
      console.error('Erro:', error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleClick = (plan: Plan) => {
    setSelectedPlan(plan);
    sessionStorage.setItem('planId', selectedPlan.toString());

    navigate('/resumo', { state: { selectedPlan: plan } });
  };

  return (
    <>
      <Styled.MainPageWrapper>
        <section className='content-wrapper'>
          <div className='content-wrapper__title-wrapper'>
            <h2>Escolha o seu plano</h2>
          </div>
          <section className='content-wrapper__boxes-wrapper'>
            {plans?.map((plan) => (
              <Cards
                plans={[plan]}
                key={plan.id + plan.billet_price + plan.pack_duration}
                onButtonClick={() => handleClick(plan)}
              />
            ))}
          </section>
        </section>
      </Styled.MainPageWrapper>
      {loading ? <MainLoading /> : <MainLoading className='closing' />}
      {/* <PaymentModal /> */}
    </>
  );
}
