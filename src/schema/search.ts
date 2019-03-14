import { gql } from 'apollo-server-koa';


export default gql`

  input SearchInput {
      perPage: Int
      page: Int
      q: String
      filters: SearchFilter
      sort: SearchSort
      client: String
  }

  input SearchSort {
    common: [String]
    project: [String]
    company: [String]
  }

  input SearchFilter {
    common: CommonFilters
    project: ProjectFilters
    company: CompanyFilters
  }

  input CommonFilters {
    dateFilter: [DateFilter]
  }

  extend type Query {
    search(input: SearchInput): Search
  }

  type Search {
      projects: ProjectList
      companies: CompanyList
  }
`;


