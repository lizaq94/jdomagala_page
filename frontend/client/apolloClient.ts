import { ApolloClient, InMemoryCache } from '@apollo/client';

const options = {
	uri: process.env.NEXT_PUBLIC_STRAPI_URL,
	cache: new InMemoryCache(),
};
const client = new ApolloClient(options);

export default client;
