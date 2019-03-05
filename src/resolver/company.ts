import { getCompany, getCompanies } from '../loader';
import { pageInfo } from '../utils';

export default {
  Query: {
    company: async (_obj, { id }, _context, _info) => {
      return await getCompany(id);
    },

    companies: async (_obj, { perPage, page, q, sort, filter, client }, _context, _info) => {
      const data =  await getCompanies(perPage, page, q, sort, filter, client);
      const items = data && data.hits && data.hits.hits || [];
      const itemCount = data && data.hits && data.hits.total || 0;
      return {
        result: items.map(item => item._source),
        count: itemCount,
        ...pageInfo(perPage, page, itemCount),
      };
    }
  },

  Mutation: {
  },

  Subscription: {
  }

};
