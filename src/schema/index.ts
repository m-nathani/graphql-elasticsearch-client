import { gql } from 'apollo-server-koa';
import paginationSchema from './pagination';
import projectSchema from './project';
import companySchema from './company';
import searchSchema from './search';

const linkSchema = gql`
  scalar Date
  scalar JSON

  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }

  type DateAttr {
    attribute: Date
    dateFormatType: String
  }

  type StringAttr {
    attribute: String
  }

  type IntAttr {
    attribute: Int
  }

  type FloatAttr {
    attribute: Float
  }

  type BooleanAttr {
    attribute: Boolean
  }
`;


export default [linkSchema, paginationSchema, projectSchema, companySchema, searchSchema];