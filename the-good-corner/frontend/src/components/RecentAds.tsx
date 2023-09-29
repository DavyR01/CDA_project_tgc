import { useState, useEffect } from "react";
import axios from "axios";
import { AdCardProps } from "./AdCard";
import DisplayAds from "./DisplayAds";

const RecentAds = () => {
  const [recentAds, setRecentAds] = useState<AdCardProps[]>([]); // On indique que la valeur initiale est un tableau mais de type AdCardProps.

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get<AdCardProps[]>(
          "http://localhost:4000/ad"
        );

        console.log(result.data);
        // console.log(result.data.map(el=> el.)); // Grâce au typage de typescript, on aura une autocomplétion avec le map, il a désormais l'information. 

        setRecentAds(result.data);
      } catch (err) {
        console.log("error", err);
      }
    };
    fetchData();
  }, []);

  return <DisplayAds ads={recentAds} title="Recent Ads" />;
};

export default RecentAds;
