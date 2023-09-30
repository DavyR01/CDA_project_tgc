import { AdCardProps } from "@/components/AdCard";
import Link from "next/link";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import axios from "axios";
import { CategoryCardProps } from "@/components/CategoryCard";
// import { useForm } from "react-hook-form"

type Inputs = {
  title: string;
  price: number;
  description: string;
  owner: string;
  imgUrl: string;
  location: string;
  category: number;
}

const EditAd = () => {
  const router = useRouter();
  // console.log(router);
  const [adDetails, setAdDetails] = useState<AdCardProps>()
  const [categories, setCategories] = useState<CategoryCardProps[]>([])
  // const { reset } = useForm()
  const [title, setTitle] = useState<string>("")
  const [price, setPrice] = useState<number>()


  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get<AdCardProps>(`http://localhost:4000/ad/${router.query.id}`)
        console.log(result.data);
        console.log(result);
        setAdDetails(result.data)
        // reset()
      } catch (error) {
        console.log("error", error);
      }
    }
    fetchData()

    const fetchCategories = async () => {
      try {
        const result = await axios.get<CategoryCardProps[]>('http://localhost:4000/category')
        console.log(result);
        setCategories(result.data);
        console.log(categories);

      } catch (error) {
        console.error(error, "An error occured during fetching categories")
      }
    }
    fetchCategories()
  }, [router.query.id])

  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form as HTMLFormElement);

        // const formJson = Object.fromEntries(formData.entries());

        const formJson = {
          idToEdit: router.query.id,
          newAd: {
            ...adDetails,
            price,
            title,
          }
        }
        try {
          axios.put("http://localhost:4000/ad", formJson)
          console.log(formJson);
        } catch (error) {
          console.log(error, "An error occured during edit the ad");
        }
      }}>
        <label>
          Titre de l'annonce : <br />
          <input onChange={(e) => setTitle(e.target.value)} defaultValue={adDetails?.title} className="text-field" name="title" />
        </label>
        <br />
        <label>
          Prix : <br />
          <input onChange={(e) => setPrice(parseInt(e.target.value))} defaultValue={adDetails?.price} className="text-field" name="price" />
        </label>
        <br />
        <label>
          Description : <br />
          <input defaultValue={adDetails?.description} className="text-field" name="description" />
        </label>
        <br />
        <label>
          Nom du vendeur : <br />
          <input defaultValue={adDetails?.owner} className="text-field" name="owner" />
        </label>
        <br />
        <label>
          URL de l'image : <br />
          <input defaultValue={adDetails?.imgUrl} className="text-field" name="imgUrl" />
        </label>
        <br />
        <label>
          Ville : <br />
          <input defaultValue={adDetails?.location} className="text-field" name="location" />
        </label><br />
        <select defaultValue={adDetails?.category?.id} name="category">
          {categories.map((el) => (
            <option value={el.id} key={el.id}>
              {el.name}
            </option>
          ))}
        </select>
        <button className="button"> Submit </button>
      </form>
    </>
  )
}

export default EditAd