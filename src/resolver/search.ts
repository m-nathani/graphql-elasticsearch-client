import projectResolver from './project';
import companyResolver from './company';

export default {
    Query: {
        search: async (_obj, { perPage, page, q, sort, filters, client }, _context, _info) => {
            return {
                projects: projectResolver.Query.projects(_obj, {perPage, page, q, sort, filters, client}, _context, _info),
                companies: companyResolver.Query.companies(_obj, {perPage, page, q, sort, filters, client}, _context, _info),
            };
        },

    }
};

