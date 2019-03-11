export const searchString = (query: string, fields: Array<string> = ['_all']) => {
    return {
        bool: {
            must: [{
                query_string: {
                    default_field: '_all',
                    query,
                    fields
                }
            }]
        }
    };
};