import projectResolver from './project';
import companyResolver from './company';

export default {
    Query: {
        search: async (_obj, args, _context, _info) => {
            return {
                projects: projectResolver.Query.projects(_obj, args, _context, _info),
                companies: companyResolver.Query.companies(_obj, args, _context, _info),
            };
        },
    }
};