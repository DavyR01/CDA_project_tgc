import { View, Image } from "react-native";
import { Card, Text } from "@ui-kitten/components";

import { gql, useApolloClient, useQuery } from "@apollo/client";

const GET_ALL_ADS1 = gql`
  query GetAllAds {
    getAllAds {
      id
      title
      category {
        id
        name
      }
      description
      imageUrl
      location
      owner
      price
    }
  }
`;

const GET_ALL_ADS2 = gql`
query Query {
  getAllAds {
    id
    title
    price
    description
    owner
    imageUrl
    location
    category {
      id
      name
    }
  }
}
`;



export default function Index() {
   const { loading, error, data } = useQuery(GET_ALL_ADS2);
   const client: any = useApolloClient();
   const backend_url = client.link.options.uri.split("/graphql")[0];

   //   if (loading) return <Text>Loading...</Text>;
   //   if (error) return <Text>Error : {error.message}</Text>;

   if (!data || !data.getAllAds) {
      return <Text>Aucune annonce trouvée !!</Text>
   }

   console.log("data : ", data);
   return (
      <View
         style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
         }}
      >
         {data.getAllAds.map((el: any) => (
            <Card
               key={el.id}
               onPress={() => {
                  console.log("pressed");
               }}
            >
               <Text>{el.title}</Text>
               <Image
                  style={{ width: 300, height: 200, resizeMode: "contain" }}
                  // src={backend_url + el.imageUrl}
                  source={el.imageUrl}
               />
            </Card>
         ))}
      </View>
      //  <Text>Test !!!!!!!!!!!</Text>
   );
}
