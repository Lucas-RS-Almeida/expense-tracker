import * as C from './styles';

import { Item } from '../../types/Item';

import { formatDate } from '../../helpers/dateFilter';

import { categories } from '../../data/categories';

type Props ={
  item: Item;
}

export function TableItem({ item }: Props) {
  return (
    <C.TableLine>
      <td>{formatDate(item.date)}</td>
      <td>
        <C.Category color={categories[item.category].color}>
          {categories[item.category].title}
        </C.Category>
      </td>
      <td>{item.title}</td>
      <td>
        <C.Value
          color={categories[item.category].expense ? '#FF0000' : '#00FF00'}
        >
          R$ {item.value}
        </C.Value>
      </td>
    </C.TableLine>
  );
}
