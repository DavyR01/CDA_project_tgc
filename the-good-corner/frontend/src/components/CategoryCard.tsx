import { CategoryCardProps } from "@/types";
import Link from "next/link";



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