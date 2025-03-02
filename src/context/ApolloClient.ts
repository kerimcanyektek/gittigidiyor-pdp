import { ApolloClient, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://mock.shop/api",
  cache: new InMemoryCache(),
});

export default client;