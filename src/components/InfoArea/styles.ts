import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 20px;
  margin-top: -40px;
  background: #fff;
  box-shadow: 0 0 5px #CCC;
`;

export const MonthArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const MonthArrow = styled.div`
  width: 40px;
  text-align: center;
  font-size: 25px;
  cursor: pointer;
`;

export const MonthTitle = styled.span`
  flex: 1;
  text-align: center;
`;

export const ResumeArea = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
`;
