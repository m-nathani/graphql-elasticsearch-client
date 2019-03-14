import { gql } from 'apollo-server-koa';
import paginationSchema from './pagination';
import projectSchema from './project';
import companySchema from './company';
import searchSchema from './search';
import filterSchema from './filter';

const linkSchema = gql`
  scalar Date
  scalar JSON
  scalar UnsignedFloat
  scalar UnsignedInt

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

  type UnsignedFloatAttr {
    attribute: UnsignedFloat
  }

  type UnsignedIntAttr {
    attribute: UnsignedInt
  }

  type BooleanAttr {
    attribute: Boolean
  }
`;

export default [linkSchema, paginationSchema, projectSchema, companySchema, searchSchema, filterSchema];