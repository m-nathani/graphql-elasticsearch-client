import { gql } from 'apollo-server-koa';

export default gql`
  extend type Query {
    company(id: String): Company
    companies(perPage: Int, page: Int, q: String, sort: [String],
              filter: JSON, client: String): CompanyList
  }

  type CompanyList {
    result: [Company]
    count: Int
    pageInfo: PageInfo
  }

  type Company {
    aka: StringAttr
    alias: StringAttr
    name: StringAttr
    # .... write your company schema..
  }

  
`;