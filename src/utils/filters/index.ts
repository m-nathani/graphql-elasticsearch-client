import * as _  from 'underscore';
import { dateFilter, DateFilter } from './date-filter';

export interface Filters {
  dateFilter?: DateFilter[];
}

const filteredResult = (result = []) => {
  return result.filter(filter => !(_.isEmpty((filter))));
};

export const esFilters = (filters: Filters) => {
  let resultFilter: any = [];
  if (filters) {
    if (filters.dateFilter) {
      resultFilter = [resultFilter, dateFilter(filters.dateFilter)];
    }
  }
  return filteredResult(resultFilter);
};

export const mergeCommonFilters = (common = {}, ...restFilters) => {
    return _.mapObject(restFilters, function(filterArray = [], _key) {
      return { ...common, ...filterArray};
  });
};