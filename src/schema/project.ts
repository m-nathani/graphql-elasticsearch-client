import { gql } from 'apollo-server-koa';

export default gql`
  extend type Query {
    project(id: String): Project
    projects(perPage: Int, page: Int, q: String, sort: [String],
             filter: JSON, client: String): ProjectList
  }

  type Project {
    id: String
    isActive: Boolean
    creationDate: DateAttr
    name: StringAttr
    aka: StringAttr
    alias: StringAttr
    section: String
    #  ... write your project schema here
  }

  type ProjectList {
    result: [Project]
    count: Int
    pageInfo: PageInfo
  }

`;

