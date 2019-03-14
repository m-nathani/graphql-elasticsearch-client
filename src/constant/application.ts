export const CLIENT = {
    TRP: 'TRP',
    TRBD: 'TRBD',
    DEFAULT: ''
};

export const PAGINATION = {
    PER_PAGE: 10,
    PER_PAGE_LIMIT: 1000,
    PAGE: 1,
};
export const DEFAULT_QUERY = '*';
export const DEFAULT_FILTER = { match_all: {} };
export const DEFAULT_INPUT = { perPage: PAGINATION.PER_PAGE, page: PAGINATION.PAGE, q: DEFAULT_QUERY, sort: [], filters: {}, client: CLIENT.DEFAULT };