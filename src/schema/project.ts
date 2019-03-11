import { gql } from 'apollo-server-koa';

export default gql`

  input ProjectInput {
    perPage: Int
    page: Int
    q: String
    filters: ProjectFilters
    sort: [String]
    client: String
  }

  input ProjectFilters {
    dateFilter: [DateFilter]
  }

  extend type Query {
    project(id: String): Project
    projects(input: ProjectInput): ProjectList
  }

  type ProjectList {
    result: [Project]
    count: Int
    pageInfo: PageInfo
  }


  type Project {
    id: ID
    isActive: Boolean
    creationDate: DateAttr
  }
`;

