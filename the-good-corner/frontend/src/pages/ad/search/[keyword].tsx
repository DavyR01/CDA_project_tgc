import DisplayAds from "@/components/DisplayAds";
import { AdCardProps } from "@/types";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SearchResults = () => {
    const [searchAds, setSearchAds] = useState<AdCardProps[]>([])
    const router = useRouter()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get<AdCardProps[]>(`http://localhost:4000/ad?title=${router.query.keyword}`)
                console.log(result);
                setSearchAds(result.data)
            } catch (error) {
                console.log("error", error);
            }
        }
        fetchData()
    }, [router.query.keyword])

    return (
        <>
            <h3>
                Search Results page for keyword : {router.query.keyword}
            </h3>
            <DisplayAds ads={searchAds} title={`Displaying search results for :${router.query.keyword}`} setAds={setSearchAds} />
        </>
    )
}

export default SearchResults;