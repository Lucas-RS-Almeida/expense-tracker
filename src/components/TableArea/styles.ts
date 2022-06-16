import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  box-shadow: 0 0 5px #ccc;
  background: #fff;
`;

export const TableHeadColumn = styled.th<{ width?: number }>`
  width: ${({ width }) => `${width}px` || 'auto'};
  padding: 10px 0;
  text-align: left;
`;
