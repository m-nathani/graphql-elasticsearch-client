import { gql } from 'apollo-server-koa';


export default gql`
  extend type Query {
    search(perPage: Int, page: Int, q: String, sort: [String],
        filters: JSON, client: String): Search
  }

  type Search {
      projects: ProjectList
      companies: CompanyList
  }
`;


