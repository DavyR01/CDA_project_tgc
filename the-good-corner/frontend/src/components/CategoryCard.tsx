import Link from "next/link";

export type CategoryCardProps = {
    name: string
}

const CategoryCard = ({ name }: CategoryCardProps) => {
    return (
        <>
            <div>
                <Link href="" className="category-navigation-link">{name}
                </Link>
            </div>
        </>//
    );
};

export default CategoryCard;