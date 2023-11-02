// import React from 'react'

import Link from "next/link"
import CategoryCard, { CategoryCardProps } from "./CategoryCard"
import { useEffect, useState } from "react"
import axios from "axios"
import { useRouter } from "next/router"
import styles from "../styles/Header.module.css"
import { ImSearch } from "react-icons/im";


// const categoriesList: CategoryCardProps[] = [
//     {
//         name: 'Jardinage'
//     },
//     {
//         name: 'Poterie'
//     },
//     {
//         name: 'Peinture'
//     },
//     {
//         name: 'Chaussures'
//     },
//     {
//         name: 'Sculpture'
//     },
//     {
//         name: 'Électroménager'
//     },
//     {
//         name: 'Photographie'
//     },
//     {
//         name: 'Informatique'
//     },
//     {
//         name: 'Vetements'
//     },
//     {
//         name: 'Peche'
//     },
//     {
//         name: 'Outillage'
//     },
//     {
//         name: 'Bébé'
//     },
//     {
//         name: 'Sport'
//     },
//     {
//         name: 'Services'
//     },
// ]

const Header = () => {
  const [categories, setCategories] = useState<CategoryCardProps[]>([])
  const router = useRouter()

  useEffect(() => {
    try {
      const fetchCategories = async () => {
        const result = await axios.get<CategoryCardProps[]>("http://localhost:4000/category")
        console.log(result);
        console.log(result.data);
        // console.log(result.headers);
        setCategories(result.data)
        fetchCategories()
      }
    } catch (error) {
      console.log('error display categories :', error);
    }
  }, [])

  return (
    <div>
      <header className={`${styles.header} header`}>
        <div className="main-menu">
          <h1>
            <Link href="/" className="button logo link-button">
              <span className="mobile-short-label">TGC</span>
              <span className="desktop-long-label">THE GOOD CORNER</span>
            </Link>
          </h1>
          <form onSubmit={(e) => {
            e.preventDefault();

            const form = e.target
            const formData = new FormData(form as HTMLFormElement);

            const formJson = Object.fromEntries(formData.entries());
            console.log(formJson);
            router.push(`/ad/search/${formJson.keyword}`)
            // router.push(`/ad/search/house`)
          }}
            className="text-field-with-button">
            <input name="keyword" className="text-field main-search-field" type="search" />
            <button className={`button button-primary`}>
              {/* <i className={`${styles.icon} fa-solid fa-magnifying-glass `}></i> */}
              <ImSearch className={`${styles.icon}`} />
            </button>
          </form>
          <Link href="/ad/new" className="button link-button"
          ><span className="mobile-short-label">Publier</span>
            <span className="desktop-long-label">Publier une annonce</span>
          </Link>
        </div>
        <nav className="categories-navigation">
          {categories.map((cat) => (
            <CategoryCard key={cat.name} name={cat.name} id={cat.id} />
            // TODO  : a compléter avec un Link et href
          ))}
        </nav>
      </header >
    </div >
  )
}

export default Header