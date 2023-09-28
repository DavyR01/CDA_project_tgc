import Link from "next/link";

export type AdCardProps = {
    id: number;
    title: string;
    imgUrl: string;
    price: number;
    link: string;
    description: string;
    owner: string;
}

const AdCard = ({ ...ad }: AdCardProps) => {
    const { id, imgUrl, title, price } = ad
    return (
        <div className="ad-card-container">
            <Link className="ad-card-link" href={`/ad/${id}`}>
                <img className="ad-card-image" src={imgUrl} />
                <div className="ad-card-text">
                    <div className="ad-card-title">{title}</div>
                    <div className="ad-card-price">{price} €</div>
                </div>
            </Link>
        </div>
    )
}

export default AdCard;