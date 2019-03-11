
import { gql } from 'apollo-server-koa';

export default gql`

  input DateRange {
    to: Date!
    from: Date!
  }

  input DateOperators {
    eq: Date
    lt: Date
    lte: Date
    gt: Date
    gte: Date
    between: DateRange
  }

  input DateFilter {
    field: String
    operator: DateOperators
  }

  input StringOperators {
    eq: String
    contains: String
  }

  input BooleanOperators {
    eq: Boolean
  }

  input NumberRange {
    to: Float!
    from: Float!
  }

  input NumberOperators {
    eq: Float
    lt: Float
    lte: Float
    gt: Float
    gte: Float
    between: NumberRange
  }
`;
