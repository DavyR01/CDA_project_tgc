import { AdCardProps } from "@/types";


const AdCard = ({ ...ad }: AdCardProps) => {
  const { id, imgUrl, title, price, link } = ad
  return (
    <div className="ad-card-container">
      <div className="ad-card-link">
        {/* <a href={link}> */}
        <img className="ad-card-image" src={imgUrl} />
        <div className="ad-card-text">
          <div className="ad-card-title">{title}</div>
          <div className="ad-card-price">{price} €</div>
        </div>
        {/* </a> */}
      </div>
    </div>
  )
}

export default AdCard;