import styled from 'styled-components';

export const TableLine = styled.tr`
  td {
    padding: 10px 0;
  }
`;

export const Category = styled.div<{ color: string }>`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  background: ${({ color }) => color};
  color: #fff;
`;

export const Value = styled.span<{ color: string }>`
  color: ${({ color }) => color};
`;
