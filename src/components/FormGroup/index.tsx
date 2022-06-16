import { ReactNode } from 'react';

import * as C from './styles';

type Props = {
  children: ReactNode;
};

export function FormGroup({ children }: Props) {
  return (
    <C.Container>
      {children}
    </C.Container>
  );
}
