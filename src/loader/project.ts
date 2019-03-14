import { elasticClient } from '../boostrap/elasticsearch';
import { PROJECT_INDEX, PROJECT_TYPE, PAGINATION, DEFAULT_QUERY, CLIENT } from '../constant';
import { SearchResponse } from 'elasticsearch';
import { clientTemplate } from '../template';
import { searchString, esSort, esFilters, Filters } from '../utils';

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
    query: string = DEFAULT_QUERY, sort: string[] = [], filters: Filters, client: string = CLIENT.DEFAULT)
    : Promise<SearchResponse<T>> => {

    console.log('-------------Projects--------------');
    console.log(esSort(query, sort));
    console.log(JSON.stringify({query: {
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
                filters: [
                    ...clientTemplate(client),
                    ...esFilters(filters),
                ]
            }
        }
    }));

    return elasticClient.search({
        ...projectElasticConfig,
        size: perPage,
        from: perPage * (page - 1),
        sort: esSort(query, sort),
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
                    filters: [
                        ...clientTemplate(client),
                        ...esFilters(filters),
                    ]
                }
            }
        }
    });
};