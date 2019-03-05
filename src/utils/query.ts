export const searchString = (query: string , fields: Array<string>= ['_all']) => {
    return {
        query_string: {
            query,
            fields
        }
    };
};