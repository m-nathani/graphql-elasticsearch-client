import * as _ from 'underscore';
import { DEFAULT_QUERY } from '../constant';

export const esSort = (query: string, sort: string[]) => {
    if (sort && !(_.isEmpty(sort))) {
        return sort;
    }
    return query === DEFAULT_QUERY ? ['lastModified.attribute:desc'] : ['_score:desc'];
};

export const mergeCommonSort = ({common = [], ...restSort}) => {
    return _.mapObject(restSort, function(sortArray = [], _key) {
        return _.union(common, sortArray);
    });
};