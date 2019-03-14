import { pingElasticsearch, elasticClient } from './elasticsearch';
import apolloServer from './apolloserver';
import { ApolloServer } from 'apollo-server-koa';

export const bootstrap = async (): Promise<ApolloServer> => {
  try {
    // ping connection with elasticsearch
    // await pingElasticsearch(elasticClient);
    return await apolloServer();
  } catch (err) {
    console.log('bootstrap error: ', err);
    throw err;
  }
};