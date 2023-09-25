// import React from 'react'
// import { AdCardProps } from "./AdCard"

import AdCard, { AdCardProps } from "./AdCard"

const RecentAds = () => {
    const ads: AdCardProps[] = [
        {
            title: "Table",
            imgUrl: "/images/table.webp",
            link: "/ads/table",
            price: 120
        },
        {
            title: "Table",
            imgUrl: "/images/bougie.webp",
            link: "/ads/table",
            price: 120
        },
        {
            title: "Table",
            imgUrl: "/images/dame-jeanne.webp",
            link: "/ads/table",
            price: 120
        },
        {
            title: "Table",
            imgUrl: "/images/vaisselier.webp",
            link: "/ads/table",
            price: 120
        },
        {
            title: "Table",
            imgUrl: "/images/vide-poche.webp",
            link: "/ads/table",
            price: 120
        },
        {
            title: "Table",
            imgUrl: "/images/porte-magazine.webp",
            link: "/ads/table",
            price: 120
        },
    ]


    return (
        <div>
            <h2>Annonces récentes</h2>
            <section className="recent-ads">
                {ads.map(ad => (
                    < AdCard
                        key={ad.imgUrl}
                        link={ad.link}
                        title={ad.title}
                        imgUrl={ad.imgUrl}
                        price={ad.price}
                    />
                ))}
            </section>
        </div>
    )
}

export default RecentAds