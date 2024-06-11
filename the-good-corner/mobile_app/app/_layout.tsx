import { Stack } from "expo-router";
import Constants from "expo-constants";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";

export default function RootLayout() {
  let hostIP = "";

  console.log('Constants:', Constants);
  console.log('host ip  before : ', hostIP);
  
  if (Constants !== undefined) {
    if (Constants.expoConfig && Constants.expoConfig.hostUri) {
      hostIP = Constants.expoConfig.hostUri.split(`:`)[0];
    }
  }

  console.log('host ip after : ', hostIP);
  
  const client = new ApolloClient({
    uri: hostIP ? `http://${hostIP}:7000/graphql` : "http://produrl/graphql",
   // uri: `http://${hostIP}:7000/graphql`,
   //  uri: `http://localhost:7000/graphql`,
   //  uri: `http://192.168.0.19:7000/graphql`,
    cache: new InMemoryCache(),
  });
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <ApolloProvider client={client}>
        <Stack>
          <Stack.Screen name="index" />
        </Stack>
      </ApolloProvider>
    </ApplicationProvider>
  );
}
