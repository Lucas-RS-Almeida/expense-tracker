import { useState } from 'react';

import * as C from './styles';

import { FormGroup } from '../FormGroup';
import Input from '../Input';

import { Item } from '../../types/Item';

import { categories } from '../../data/categories';

import { newDateAdjusted } from '../../helpers/dateFilter';

type Props = {
  onAdd: (item: Item) => void;
};

export const InputArea = ({ onAdd }: Props) => {
  const [date, setDate] = useState<any>('');
  const [category, setCategory] = useState<any>('');
  const [title, setTitle] = useState<any>('');
  const [value, setValue] = useState<any>(0);

  let categoryKeys: string[] = Object.keys(categories);

  function handleSubmit(event: any) {
    event.preventDefault();

    let errors: string[] = [];

    if(isNaN(new Date(date).getTime())) {
      errors.push('Data inválida!');
    }
    if(!categoryKeys.includes(category)) {
      errors.push('Categoria inválida!');
    }
    if(title === '') {
      errors.push('Título vazio!');
    }
    if(value <= 0) {
      errors.push('Valor inválido!');
    }

    if(errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      onAdd({
        id: String(new Date().getTime()),
        date: newDateAdjusted(date),
        category: category,
        title: title,
        value: value,
      });
      clearFields();
    }
  }

  function clearFields() {
    setDate('');
    setCategory('');
    setTitle('');
    setValue(0);
  }

  return (
    <C.FormContainer onSubmit={handleSubmit}>
      <FormGroup>
        <label>Data</label>
        <Input
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <label>Categoria</label>
        <C.Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Selecione uma categoria</option>
          <option value="food">Alimento</option>
          <option value="rent">Aluguel</option>
          <option value="salary">Salário</option>
        </C.Select>
      </FormGroup>
      <FormGroup>
        <label>Título</label>
        <Input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <label>Valor</label>
        <Input
          type="number"
          value={value} 
          onChange={(event) => setValue(event.target.value)}
        />
      </FormGroup>
      <C.Button
        type="submit"
      >
        Adicionar
      </C.Button>
    </C.FormContainer>
  );
}
