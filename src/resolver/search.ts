import projectResolver from './project';
import companyResolver from './company';
import { DEFAULT_INPUT } from '../constant';
import { mergeCommonSort, mergeCommonFilters } from '../utils';

export default {
    Query: {
        search: async (_obj, args, _context, _info) => {
            const { input =  DEFAULT_INPUT, ...restArgs } = args;
            const { sort, filters, ...restInput } = input;
            const {project: projectSort, company: companytSort } = mergeCommonSort(sort);
            const {project: projectFilter, company: companytFilter } = mergeCommonFilters(filters);
            return {
                projects: projectResolver.Query.projects(_obj,
                     { input: {sort: projectSort, filters: projectFilter, ...restInput}, ...restArgs }, _context, _info),
                companies: companyResolver.Query.companies(_obj,
                     { input: {sort: companytSort, filters: companytFilter, ...restInput}, ...restArgs }, _context, _info),
            };
        },
    }
};
