import { gql } from 'apollo-server-koa';

export default gql`
# Information about pagination.
  type PageInfo {
    # Current page number
    currentPage: Int!
    # Number of items per page
    perPage: Int!
    # Total number of pages
    pageCount: Int
    # Total number of items
    itemCount: Int
    # When paginating forwards, are there more items?
    hasNextPage: Boolean
    # When paginating backwards, are there more items?
    hasPreviousPage: Boolean
  }
`;
