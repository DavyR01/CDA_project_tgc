import AdCard, { AdCardProps } from "./AdCard"

type DisplayAdsType = {
    ads: AdCardProps[];
    title: string;
}

const DisplayAds = ({ ads, title }: DisplayAdsType) => {
    return (
        <>
            <h2>{title}</h2>
            <section className="recent-ads">
                {ads.map((ad) => (
                    <div key={ad.id}>
                        < AdCard
                            key={ad.imgUrl}
                            id={ad.id}
                            link={ad.link}
                            title={ad.title}
                            imgUrl={ad.imgUrl}
                            price={ad.price}
                            description={ad.description}
                            owner={ad.owner}
                        />
                    </div>
                ))}
            </section>
        </>
    )
}

export default DisplayAds;