import { category } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";



const NewAd = () => {
    const [categories, setCategories] = useState<category[]>([])

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const result = await axios.get<category[]>("http://localhost:4000/category")
                console.log(result.data);
                setCategories(result.data)
            } catch (error) {
                console.log('an error occured during fetching categories', error);
            }
        }
        fetchCategories()
    }, [])

    return (
        <form onSubmit={(e) => {
            e.preventDefault();

            const form = e.target;
            const formData = new FormData(form as HTMLFormElement);

            const formJson = Object.fromEntries(formData.entries());
            axios.post("http://localhost:4000/ad", formJson)
            console.log(formJson);
        }}>
            <label>
                Titre de l'annonce : <br />
                <input className="text-field" name="title" />
            </label>
            <br />
            <label>
                Prix : <br />
                <input className="text-field" name="price" />
            </label>
            <br />
            <label>
                Description : <br />
                <input className="text-field" name="description" />
            </label>
            <br />
            <label>
                Nom du vendeur : <br />
                <input className="text-field" name="owner" />
            </label>
            <br />
            <label>
                URL de l'image : <br />
                <input className="text-field" name="imgUrl" />
            </label>
            <br />
            <label>
                Ville : <br />
                <input className="text-field" name="location" />
            </label><br />
            <select name="category">
                {categories.map((el) => (
                    <option value={el.id} key={el.id}>
                        {el.name}
                    </option>
                ))}
            </select>
            <button className="button"> Submit </button>
        </form>
    );
}

export default NewAd;