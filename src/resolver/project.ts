import { getProject,  getProjects } from '../loader';
import { pageInfo } from '../utils';

export default {
  Query: {
    project: async (_obj, { id }, _context, _info) => {
      return await getProject(id);
    },

    projects: async (_obj, { perPage, page, q, sort, filter, client }, _context, _info) => {
     const data =  await getProjects(perPage, page, q, sort, filter, client);
      const items = data && data.hits && data.hits.hits || [];
      const itemCount: number = data && data.hits && data.hits.total || 0;
      return {
        result: items.map(item => item._source),
        count: itemCount,
        ...pageInfo(perPage, page, itemCount),
      };
    },
  },

  Mutation: {
  },

  Subscription: {
  }

};
