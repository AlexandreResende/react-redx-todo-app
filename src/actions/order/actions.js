
import { ORDER_BY } from '../../constants/actionTypes';

export const orderBy = (orderedBy) => {
  return {
    type: ORDER_BY,
    orderedBy,
  }
}
