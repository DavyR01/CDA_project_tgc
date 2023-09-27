import { useEffect, useState } from "react"
import AdCard, { AdCardProps } from "./AdCard"
import axios from "axios"

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


const RecentAds = () => {
    const [total, setTotal] = useState(0);
    const [time, setTime] = useState(new Date())
    const [ads, setAds] = useState<AdCardProps[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get<AdCardProps[]>("http://localhost:4000/ad")
                console.log(result);
                setAds(result.data)
            } catch (error) {
                console.log("error", error);
            }
        }
        fetchData()
    }, [])

    return (
        <div>
            <h2>Annonces récentes</h2>
            <p>Prix total: {total}</p>
            <p>{time.toLocaleTimeString()}</p>
            <button className="button" onClick={() => setTime(new Date())}>Bouton</button>
            <section className="recent-ads">
                {ads.map((ad, index) => (
                    <div key={index}>
                        < AdCard
                            key={ad.imgUrl}
                            id={ad.id}
                            link={ad.link}
                            title={ad.title}
                            imgUrl={ad.imgUrl}
                            price={ad.price}
                        />
                        <div className="space-between">
                            <button className="button" onClick={() => setTotal(total + ad.price)}>Add price to total</button>
                            <button className="button2">Delete</button>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default RecentAds