import { Category } from '../types/Category';

export const categories: Category = {
  food: {
    id: 'c00',
    title: 'Alimentação',
    color: '#00F',
    expense: true,
  },
  rent: {
    id: 'c01',
    title: 'Aluguel',
    color: '#A52A2A',
    expense: true,
  },
  salary: {
    id: 'c02',
    title: 'Salário',
    color: '#00FF00',
    expense: false,
  },
};
