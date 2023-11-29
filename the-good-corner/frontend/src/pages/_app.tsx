import Layout from "../components/Layout";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  // uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});


// client
//   .query({
//     query: gql`
//       query GetLocations {
//         locations {
//           id
//           name
//           description
//           photo
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));


function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}


// Disabling SSR
export default dynamic(() => Promise.resolve(App), { ssr: false });
