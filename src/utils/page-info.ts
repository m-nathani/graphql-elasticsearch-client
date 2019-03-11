import { PAGINATION } from '../constant';

interface PageInfo {
  currentPage: number;
  perPage: number;
  pageCount: number;
  itemCount: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export const pageInfo = (perPage: number = PAGINATION.PER_PAGE, page: number = PAGINATION.PAGE, itemCount: number = 0): PageInfo => {
  if (page <= 0) {
    throw new Error('Argument `page` should be positive number.');
  }

  if (perPage > PAGINATION.PER_PAGE_LIMIT) {
    throw new Error(`Argument 'perPage' should be less ${PAGINATION.PER_PAGE_LIMIT}.`);
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