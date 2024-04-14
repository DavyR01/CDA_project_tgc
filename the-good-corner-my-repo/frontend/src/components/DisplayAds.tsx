import Link from "next/link";
import axios from "axios";
import AdCard, { AdCardProps } from "./AdCard";

type DisplayAdsType = {
  ads: AdCardProps[];
  title: string;
};

const DisplayAds = ({ ads, title }: DisplayAdsType) => {

  /*   const updateAdsDelete = (idAd: number) => {
    setAds(ads.filter(
      ad => ad.id != idAd
    ))
  }
 */

  // const deleteAd = async (test: number) => {
  //   try {
  //     const result = await axios.delete(`http://localhost:4000/ad`, { data: { id: test } })
  //     console.log(result);
  //     if (result.status === 200) {
  //       // const fetchData = async () => {
  //       //     try {
  //       //         const result = await axios.get<AdCardProps[]>("http://localhost:4000/ad")
  //       //         console.log(result);
  //       //         setAds(result.data)
  //       //     } catch (error) {
  //       //         console.log("error", error);
  //       //     }
  //       // }
  //       // fetchData()
  //       // router.push('/ad/new')
  //       // updateAdsDelete(test)

  //     }
  //     // setRecentAds(result.data)
  //   } catch (error) {
  //     console.log("An error occured during delete ad with id", error);
  //   }
  // }


  return (
    <>
      <h2>{title}</h2>
      <section className="recent-ads">
        {ads.map((ad) => (
          <div key={ad.id}>
            <Link href={`/ad/${ad.id}`}>
              <AdCard
                imageUrl={ad.imageUrl}
                link={ad.link}
                title={ad.title}
                price={ad.price}
                category={ad.category}
                description={ad.description}
                location={ad.location}
                owner={ad.owner}
              />
            </Link>
            <button
              onClick={() => {
                console.log("delete");
                axios.delete(`http://localhost:4000/ad/${ad.id}`);
              }}
            >
              Delete
            </button>

            {/* <button onClick={() => {
              console.log("delete")
              deleteAd((ad.id))

            }}
              className="button button-primary">Delete
            </button> */}

          </div>
        ))}
      </section>
    </>
  );
};

export default DisplayAds;
