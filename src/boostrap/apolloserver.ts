import { ApolloServer } from 'apollo-server-koa';
import typeDefs from '../schema';
import resolvers from '../resolver';
import { makeExecutableSchema } from 'graphql-tools';

export default async () => {
    return new ApolloServer({
        introspection: true,
        playground: true,
        schema: makeExecutableSchema({
          typeDefs,
          resolvers,
        }),
        formatError: error => {
          // format and log error
          return error;
        },
        context: async (c: any) => {
            // context for the graphql
            return { ...c };
          },
      });
};
