import * as _ from 'underscore';

interface DateRange {
  to: Date;
  from: Date;
}

interface DateOperators {
  eq: Date;
  lt: Date;
  lte: Date;
  gt: Date;
  gte: Date;
  between: DateRange;
}

export interface DateFilter {
  field: string;
  operator: DateOperators;
}

const dateComparision = (filter: DateFilter, key: string) => {
  const { operator, field } = filter;
  return {
    bool: {
      must: [{
        range: {
          [field]: {
            [key]: operator[key]
          }
        }
      }]
    }
  };
};

const dateRange = (filter: DateFilter) => {
  const { operator, field } = filter;
  return {
    bool: {
      must: [{
        range: {
          [field]: {
            gt: operator.between.from,
            lt: operator.between.to
          }
        }
      }]
    }
  };
};

const dateMatch = (filter: DateFilter, key: string) => {
  const { operator, field } = filter;
  return {
    bool: {
      must: [
        {
          term: {
            [field]: operator[key]
          }
        }
      ]
    }
  };
};

const dateOperators = (filter: DateFilter) => {
  const { operator, field } = filter;
  const key = Object.keys(operator)[0];
  let resultFilter = {};

  if (_.isEmpty(field)) {
    throw Error('no field found for the filed.');
  }

  if (_.isEmpty(key)) {
    throw Error('no operator found for the filed.');
  }
  switch (key) {
    case 'lt':
    case 'lte':
    case 'gt':
    case 'gte':
      resultFilter = dateComparision(filter, key);
      break;
    case 'eq':
      resultFilter = dateMatch(filter, key);
      break;
    case 'between':
      resultFilter = dateRange(filter);
    default:
      resultFilter = {};
      break;
  }

  return resultFilter;
};

export const dateFilter = (dateFilters: Array<DateFilter>): any => {
  let result = {};
  dateFilters.forEach( (filter) => {
    result = { ...result, ...dateOperators(filter) };
  });

  return result;
};