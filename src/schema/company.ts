import { gql } from 'apollo-server-koa';

export default gql`

  input CompanyInput {
    perPage: Int
    page: Int
    q: String
    filters: CompanyFilters
    sort: [String]
    client: String
  }

  input CompanyFilters {
    creationDate: String
  }

  extend type Query {
    company(id: String): Company
    companies(input: CompanyInput): CompanyList
  }

  type CompanyList {
    result: [Company]
    count: Int
    pageInfo: PageInfo
  }

  type Company {
    aka: StringAttr
    alias: StringAttr
  }

`;