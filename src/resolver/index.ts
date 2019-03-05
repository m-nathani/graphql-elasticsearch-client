import { DateTime } from '@okgrow/graphql-scalars';
import * as GraphQLJSON from 'graphql-type-json';
import projectResolvers from './project';
import companyResolvers from './company';

const customScalarResolver = {
  Date: DateTime,
  JSON: GraphQLJSON
};

export default [
  customScalarResolver,
  projectResolvers,
  companyResolvers,
];