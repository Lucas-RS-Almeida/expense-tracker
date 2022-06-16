import { useState, useEffect } from 'react';

import * as C from './App.styles';

import GlobalStyle from './assets/styles/global';

import { Item } from './types/Item';

import { items } from './data/items';
import { categories } from './data/categories';

import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';

import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';
import { TableArea } from './components/TableArea';

export function App() {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    setIncome(0);
    setExpense(0);

    filteredList.map((item) => (
      categories[item.category].expense
      ? setExpense((prevState) => prevState += item.value)
      : setIncome((prevState) => prevState += item.value)
    ));
  }, [filteredList]);

  function handleMonthChange(newMonth: string) {
    setCurrentMonth(newMonth);
  }

  function handleAddItem(item: Item) {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  return (
    <>
      <GlobalStyle />
      <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />
        <InputArea onAdd={handleAddItem} />
        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
    </>
  );
}
