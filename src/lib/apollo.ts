import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o1poj505f401z2e9hxhemq/master',
  cache: new InMemoryCache()
})