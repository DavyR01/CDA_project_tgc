import DisplayAds from "./DisplayAds";
import { useQuery, gql } from '@apollo/client';

const RecentAds = () => {

  const GET_ALL_ADS = gql`
query GetAllAds {
  getAllAds {
    id
    title
    price
    description
    owner
    imageUrl
    location
    category {
      id,name
    }
  }
}
`;

  const { loading, error, data } = useQuery(GET_ALL_ADS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;


  // const [recentAds, setRecentAds] = useState<AdCardProps[]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await axios.get<AdCardProps[]>(
  //         "http://localhost:4000/ad"
  //       );
  //       console.log(result.data);
  //       setRecentAds(result.data);
  //     } catch (err) {
  //       console.log("error", err);
  //     }
  //   };
  //   fetchData();
  // }, []);

  console.log('data RecentAds.tsx : ', data);
  

  return <DisplayAds ads={data.getAllAds} title="Recent Ads" />;
};

export default RecentAds;
