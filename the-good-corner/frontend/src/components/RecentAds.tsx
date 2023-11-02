
import DisplayAds from "./DisplayAds";
import { useQuery, gql } from '@apollo/client';

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
//     },
//     {
//         title: "Dame-Jeanne",
//         price: 80,
//         link: "/ads/dame-jeanne",
//         imgUrl: "/images/dame-jeanne.webp",
//     },
//     {
//         title: "Vide-Poche",
//         price: 15,
//         link: "/ads/vide-poche",
//         imgUrl: "/images/vide-poche.webp",
//     },
//     {
//         title: "Porte-Magazine",
//         price: 120,
//         link: "/ads/porte-magazine",
//         imgUrl: "/images/porte-magazine.webp",
//     },
//     {
//         title: "Vaisselier",
//         price: 450,
//         link: "/ads/vaisselier",
//         imgUrl: "/images/vaisselier.webp",
//     },
// ]

const GET_ALL_ADS = gql`
query GetAllAds {
  getAllAds {
    id
    title
    price
    description
    owner
    imgUrl
    location
    category {
      id
      name
    }
  }
}
`;


const RecentAds = () => {

    const { loading, error, data } = useQuery(GET_ALL_ADS)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    console.log(data);
    

    // const [recentAds, setRecentAds] = useState<AdCardProps[]>([])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const result = await axios.get<AdCardProps[]>("http://localhost:4000/ad")
    //             console.log(result);
    //             setRecentAds(result.data)
    //         } catch (error) {
    //             console.log("error", error);
    //         }
    //     }
    //     fetchData()
    // }, [])

    return (
        <>
            <h2>Annonces récentes</h2>
            <DisplayAds ads={data.getAllAds} />
            {/* <DisplayAds ads={recentAds} setAds={setRecentAds} title="Recent Ads" /> */}
        </>

    )

}

export default RecentAds