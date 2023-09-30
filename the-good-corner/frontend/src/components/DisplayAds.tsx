import Link from "next/link";
import AdCard, { AdCardProps } from "./AdCard"
import { useEffect, useState } from "react";
import axios from "axios";
import { Router, useRouter } from "next/router";

type DisplayAdsType = {
  ads: AdCardProps[];
  title: string;
  setAds: any;
}

const DisplayAds = ({ ads, setAds, title }: DisplayAdsType) => {

  const updateAdsDelete = (idAd: number) => {
    setAds(ads.filter(
      ad => ad.id != idAd
    ))
  }

  const router = useRouter()
  const deleteAd = async (test: number) => {
    try {
      const result = await axios.delete(`http://localhost:4000/ad`, { data: { id: test } })
      console.log(result);
      if (result.status === 200) {
        // const fetchData = async () => {
        //     try {
        //         const result = await axios.get<AdCardProps[]>("http://localhost:4000/ad")
        //         console.log(result);
        //         setAds(result.data)
        //     } catch (error) {
        //         console.log("error", error);
        //     }
        // }
        // fetchData()
        // router.push('/ad/new')
        updateAdsDelete(test)

      }
      // setRecentAds(result.data)
    } catch (error) {
      console.log("An error occured during delete ad with id", error);
    }
  }


  return (
    <>
      <section className="recent-ads">
        {ads.map((ad) => (
          <div key={ad.id}>
            <Link href={`/ad/${ad.id}`}>
              < AdCard
                id={ad.id}
                link={ad.link}
                title={ad.title}
                imgUrl={ad.imgUrl}
                price={ad.price}
                description={ad.description}
                location={ad.location}
                owner={ad.owner}
                category={ad.category}
              />
            </Link>
            <button onClick={() => {
              console.log("delete")
              deleteAd((ad.id))

            }}
              className="button2">Delete</button>
          </div>
        ))}
      </section >
    </>
  )
}

export default DisplayAds;