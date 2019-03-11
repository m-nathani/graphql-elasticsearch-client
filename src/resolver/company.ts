import { getCompany, getCompanies } from '../loader';
import { pageInfo } from '../utils';

export default {
  Query: {
    company: async (_obj, { id }, _context, _info) => {
      return await getCompany(id);
    },

    companies: async (_obj, { input }, _context, _info) => {
      const { perPage, page, q, sort, filters, client } = input;
      const data =  await getCompanies(perPage, page, q, sort, filters, client);
      const items = data && data.hits && data.hits.hits || [];
      const itemCount: number = data && data.hits && data.hits.total || 0;
      return {
        result: items.map(item => item._source),
        count: itemCount,
        pageInfo: pageInfo(perPage, page, itemCount),
      };
    }
  },

  Mutation: {
  },

  Subscription: {
  }

};
