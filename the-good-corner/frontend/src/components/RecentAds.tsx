import { useEffect, useState } from "react"
import AdCard, { AdCardProps } from "./AdCard"
import axios from "axios"

const ads: AdCardProps[] = [
    {
        title: "Table",
        price: 120,
        link: "/ads/table",
        imgUrl: "/images/table.webp",
    },
    {
        title: "Bougie",
        price: 4,
        link: "/ads/bougie",
        imgUrl: "/images/bougie.webp",
    },
    {
        title: "Dame-Jeanne",
        price: 80,
        link: "/ads/dame-jeanne",
        imgUrl: "/images/dame-jeanne.webp",
    },
    {
        title: "Vide-Poche",
        price: 15,
        link: "/ads/vide-poche",
        imgUrl: "/images/vide-poche.webp",
    },
    {
        title: "Porte-Magazine",
        price: 120,
        link: "/ads/porte-magazine",
        imgUrl: "/images/porte-magazine.webp",
    },
    {
        title: "Vaisselier",
        price: 450,
        link: "/ads/vaisselier",
        imgUrl: "/images/vaisselier.webp",
    },
]


const RecentAds = () => {
    const [total, setTotal] = useState(0);
    const [time, setTime] = useState(new Date())

    // const everyRender = () => {
    //     console.log("This will be executed after every render");
    // }
    // everyRender();

    useEffect(() => {
        const firstRenderOnly = () => {
            setTotal(1);
            console.log("This will be executed after the first render only.Even if I change the state");
        }
        firstRenderOnly()
    }, [time])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get("http://localhost:4000/ad")
                console.log(result);
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
                {ads.map(ad => (
                    <div key={ad.title}>
                        < AdCard
                            key={ad.imgUrl}
                            link={ad.link}
                            title={ad.title}
                            imgUrl={ad.imgUrl}
                            price={ad.price}
                        />
                        <button className="button" onClick={() => setTotal(total + ad.price)}>Add price to total</button>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default RecentAds