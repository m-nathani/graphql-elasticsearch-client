import { elasticClient } from '../boostrap/elasticsearch';
import { PROJECT_INDEX, PROJECT_TYPE, PAGINATION } from '../constant';
import { SearchResponse } from 'elasticsearch';
import { clientTemplate } from '../template';
import { searchString, sortSearch, esFilters } from '../utils';

const projectElasticConfig = {
    index: PROJECT_INDEX,
    type: PROJECT_TYPE,
    _source: true,
};

export const getProject = async (id: string): Promise<any> => {
    return elasticClient.getSource({
        id: id,
        ...projectElasticConfig,
    });
};

export const getProjects = async <T>(perPage: number = PAGINATION.PER_PAGE, page: number = PAGINATION.PAGE,
    query: string = '*', sort: string[], filters: any, client: string): Promise<SearchResponse<T>> => {

        return elasticClient.search({
        ...projectElasticConfig,
        size: perPage,
        from: perPage * (page - 1),
        sort: sortSearch(query, sort),
        body: {
            query: {
                filtered: {
                    query: {
                        bool: {
                            should: [
                                searchString(query, [
                                    'name.attribute'
                                ]),
                            ],
                        }
                    }
                }
            },
            filter: {
                and: {
                    filters: {
                        ...clientTemplate(client),
                        ...esFilters(filters),
                    }
                }
            }
        }
    });
};