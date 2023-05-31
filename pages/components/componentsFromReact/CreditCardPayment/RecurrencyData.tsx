import React from 'react';
import * as Styled from './styles';
interface IProps {
  onRadioSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelection: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  isRecurrency: boolean;
  opcaoSelecionada: string;
}

export const RecurrencyData = ({
  isRecurrency,
  onRadioSelect,
  handleSelection,
  opcaoSelecionada
}: IProps) => {
  return (
    <>
      <Styled.RecurrencyDataWrapper>
        <h2>Recorrência?</h2>
        <div className='inputs-wrapper'>
          <label htmlFor='grid-recorrencia-sim'>
            Sim
            <input
              id='grid-recorrencia-sim'
              type='radio'
              name='recurrency'
              onChange={(e) => onRadioSelect(e)}
              value='Sim'
              required
            />
          </label>
          <label htmlFor='grid-recorrencia-nao'>
            Não
            <input
              id='grid-recorrencia-nao'
              type='radio'
              name='recurrency'
              onChange={(e) => onRadioSelect(e)}
              value='Não'
              required
            />
          </label>
        </div>
        {/* INSERIR CONDICIONAL AQUI
         */}
        {isRecurrency ? (
          <Styled.SelectRecurrency>
            <label htmlFor='opcoes'>
              Selecione uma opção
              <select
                id='opcoes'
                value={opcaoSelecionada}
                onChange={(e) => handleSelection(e)}
                // name='select'
                required
              >
                <option
                  value='Selecione uma opção de recorrência'
                  disabled
                  style={{ color: 'black' }}
                >
                  Selecione uma opção de recorrência
                </option>
                <option defaultValue='30' style={{ color: 'black' }}>
                  30 dias
                </option>
                <option value='60' style={{ color: 'black' }}>
                  60 dias
                </option>
                <option value='90' style={{ color: 'black' }}>
                  90 dias
                </option>
              </select>
            </label>
          </Styled.SelectRecurrency>
        ) : (
          !isRecurrency
        )}
      </Styled.RecurrencyDataWrapper>
    </>
  );
};
