import { gql, useQuery } from "@apollo/client";
import DisplayAds from "./DisplayAds";

// const ads: AdCardProps[] = [
//     {
//         title: "Table",
//         price: 120,
//         link: "/ads/table",
//         imgUrl: "/images/table.webp",
//     },
//     {
//         title: "Bougie",
//         price: 4,
//         link: "/ads/bougie",
//         imgUrl: "/images/bougie.webp",
//     }
// ]


const GET_ALL_ADS = gql`
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

const RecentAds = () => {
  const { loading, error, data } = useQuery(GET_ALL_ADS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data);

  return <DisplayAds ads={data.getAllAds} title="Recent Ads" />;
};

export default RecentAds;
