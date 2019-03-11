import { elasticClient } from '../boostrap/elasticsearch';
import { COMPANY_INDEX, COMPANY_TYPE, PAGINATION } from '../constant';
import { SearchResponse } from 'elasticsearch';
import { clientTemplate } from '../template';
import { searchString, sortSearch } from '../utils';

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
     query: string = '*', sort: string[], filters: any, client: string): Promise<SearchResponse<T>> => {
    return elasticClient.search({
        ...companyElasticConfig,
        size: perPage,
        from: perPage * (page - 1),
        sort: sortSearch(query, sort),
        body: {
            query: {
                filtered: {
                    query: {
                        bool: {
                            must: [
                                searchString(query, [
                                    'name.attribute'
                                ])
                            ],
                        }
                    }
                }
            },
            filter: {
                and: {
                    ...clientTemplate(client),
                }
            }
        }
    });
};