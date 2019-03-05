import { PAGINATION } from '../constant';

export const pageInfo = (perPage: number = PAGINATION.PER_PAGE, page: number = PAGINATION.PAGE, itemCount: number = 0) => {
  if (page <= 0) {
    throw new Error('Argument `page` should be positive number.');
  }
  if (perPage <= 0) {
    throw new Error('Argument `perPage` should be positive number.');
  }
  return {
    hasNextPage: itemCount > page * perPage,
    hasPreviousPage: page > 1,
    currentPage: page,
    perPage,
    pageCount: Math.ceil(itemCount / perPage),
    itemCount,
  };
};