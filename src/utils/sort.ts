export const sortSearch = (query: string, sort: string[]) => {
    if (sort && sort.length) {
        return sort;
    }
    return query === '*' ? ['lastModified.attribute:desc'] : ['_score:desc'];
};