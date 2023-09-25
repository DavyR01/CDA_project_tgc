import Link from "next/link";

export type CategoryCardProps = {
    category: string
}

const CategoryCard = ({ category }: CategoryCardProps) => {
    return (
        <>
            <div>
                <Link href="" className="category-navigation-link">{category}
                </Link>
            </div>
        </>
    );
};

export default CategoryCard;