import axios from "axios";
import { useEffect, useState } from "react";

type category = {
    id: number;
    name: string;
}

const NewAd = () => {
    const [categories, setCategories] = useState<category[]>([])

    useEffect(() => {
        const fetchCategories = async () => {
            const result = await axios.get<category[]>("http://localhost:4000/category")
            console.log(result.data);
            setCategories(result.data)
        }
        fetchCategories()
    }, [])

    return (
        <form onSubmit={(e) => {
            e.preventDefault();

            const form = e.target;
            const formData = new FormData(form as HTMLFormElement);

            const formJson = Object.fromEntries(formData.entries());
            console.log(formJson);
        }}>
            <label>
                Titre de l'annonce : <br />
                <input className="text-field" name="titre" />
            </label>
            <br />
            <label>
                Prix : <br />
                <input className="text-field" name="prix" />
            </label>
            <br />
            <label>
                Description : <br />
                <input className="text-field" name="description" />
            </label>
            <br />
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