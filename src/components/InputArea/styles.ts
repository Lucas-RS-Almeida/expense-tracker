import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 100%;
  max-width: 960px;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  border-radius: 10px;
  gap: 10px;
  padding: 20px;
  margin-top: 20px;
  background: #fff;
  box-shadow: 0 0 5px #CCC;
`;

export const Select = styled.select`
  width: 100%;
  min-width: 160px;
  height: 45px;
  border-radius: 5px;
  outline: none;
  border: none;
  font-size: 16px;
  padding: 0 16px;
  background: #fff;
  box-shadow: 0 0 5px #CCC;
`;

export const Button = styled.button`
  height: 45px;
  font-size: 16px;
  border-radius: 5px;
  padding: 0 16px;
  font-weight: bold;
  transition: all .2s ease-in;
  background:  #0a02e4;
  color: #fff;

  &:hover {
    background:  #00008b;
    transform: scale(1.01);
  }
`;
