import Link from "next/link";
import AdCard, { AdCardProps } from "./AdCard"

type DisplayAdsType = {
    ads: AdCardProps[];
    title: string;
}

const DisplayAds = ({ ads, title }: DisplayAdsType) => {

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
                        <div className="space-between">
                            <button className="button2">Delete</button>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}

export default DisplayAds;