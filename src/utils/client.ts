import { GraphQLClient, gql } from 'graphql-request';
import awaitToJs from 'await-to-js';
import config from '../config';

const client = new GraphQLClient(`${config.API_URL}/graphql`, {
  mode: 'cors',
});

export const makeRequest = async (query: string, variables?: IObj) => {
  const [error, response] = await awaitToJs(client.request(
    gql`${query}`,
    variables
  ));
  if (error) {
    throw error;
  }

  return response;
}