import { getProject,  getProjects } from '../loader';
import { pageInfo } from '../utils';
import { DEFAULT_INPUT } from '../constant';

export default {
  Query: {
    project: async (_obj, { id }, _context, _info) => {
      return await getProject(id);
    },

    projects: async (_obj, { input = DEFAULT_INPUT } , _context, _info) => {
      const { perPage, page, q, sort, filters, client } = input;
      const data =  await getProjects(perPage, page, q, sort, filters, client);
      const items = data && data.hits && data.hits.hits || [];
      const itemCount: number = data && data.hits && data.hits.total || 0;

      return {
        result: items.map(item => item._source),
        count: itemCount,
        pageInfo: pageInfo(perPage, page, itemCount),
      };
    },
  },

  Mutation: {
  },

  Subscription: {
  }

};
