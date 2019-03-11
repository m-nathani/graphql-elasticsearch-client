import { gql } from 'apollo-server-koa';


export default gql`

  input SearchInput {
      perPage: Int
      page: Int
      q: String
      filters: SearchFilter
      sort: [String]
      client: String
  }

  input SearchFilter {
    common: CommonFilters
    project: ProjectFilters
  }

  input CommonFilters {
    country: String
  }

  extend type Query {
    search(input: SearchInput): Search
  }

  type Search {
      projects: ProjectList
      companies: CompanyList
  }
`;


