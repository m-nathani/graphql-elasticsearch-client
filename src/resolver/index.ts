import { DateTime, NonNegativeFloat, NonNegativeInt } from '@okgrow/graphql-scalars';
import * as GraphQLJSON from 'graphql-type-json';
import projectResolvers from './project';
import companyResolvers from './company';
import searchResolvers from './search';

const customScalarResolver = {
  Date: DateTime,
  JSON: GraphQLJSON,
  UnsignedFloat: NonNegativeFloat,
  UnsignedInt: NonNegativeInt
};

export default [
  customScalarResolver,
  projectResolvers,
  companyResolvers,
  searchResolvers,
];
