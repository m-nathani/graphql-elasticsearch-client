import { elasticClient } from '../boostrap/elasticsearch';
import { COMPANY_INDEX, COMPANY_TYPE, PAGINATION, DEFAULT_QUERY, CLIENT } from '../constant';
import { SearchResponse } from 'elasticsearch';
import { clientTemplate } from '../template';
import { searchString, esSort, Filters, esFilters } from '../utils';

const companyElasticConfig = {
    index: COMPANY_INDEX,
    type: COMPANY_TYPE,
    _source: true
};

export const getCompany = async (id: string): Promise<any> => {
    return elasticClient.getSource({
        id: id,
        ...companyElasticConfig,
    });
};

export const getCompanies = async <T>(perPage: number = PAGINATION.PER_PAGE, page: number = PAGINATION.PAGE,
    query: string = DEFAULT_QUERY, sort: string[] = [], filters: Filters, client: string = CLIENT.DEFAULT)
    : Promise<SearchResponse<T>> => {

    return elasticClient.search({
        ...companyElasticConfig,
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
