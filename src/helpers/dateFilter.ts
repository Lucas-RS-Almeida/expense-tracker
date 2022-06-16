import { Item } from '../types/Item';

export function getCurrentMonth() {
  let now = new Date();
  let month = now.getMonth();
  let year = now.getFullYear();

  return `${year}-${month + 1}`;
}

export function filterListByMonth(list: Item[], date: string): Item[] {
  const [year, month] = date.split('-');

  const newList: Item[] = list.filter((item) => (
    item.date.getFullYear() === parseInt(year)
    && item.date.getMonth() === parseInt(month)
  ));

  return newList;
}

export function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
}

export function formatCurrentMonth(currentMonth: string): string {
  const [year, month] = currentMonth.split('-');
  const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outrubro", "Novembro", "Dezembro"];

  return `${months[parseInt(month) - 1]} de ${year}`;
}

export function newDateAdjusted(dateField: string) {
  let [year, month, day] = dateField.split('-')
  return new Date(parseInt(year), parseInt(month), parseInt(day))
}

const addZeroToDate = (n: number): string => n < 10 ? `0${n}` : `${n}`;
