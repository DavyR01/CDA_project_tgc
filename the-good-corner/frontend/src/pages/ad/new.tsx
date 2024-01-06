import { category } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    title: string;
    price: number;
    description: string;
    owner: string;
    imageUrl: string;
    location: string;
    category: number;
};

const NewAd = () => {
    const [categories, setCategories] = useState<category[]>([])
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()

    const [file, setFile] = useState<File>();
    const [imageURL, setImageURL] = useState<String>();


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

    const handleImageUpload = async () => {
        if (file) {
            const url = "http://localhost:8000/upload";
            const formData = new FormData();
            formData.append("file", file, file.name);
            try {
                const response = await axios.post(url, formData);
                setImageURL(response.data.filename);
            } catch (err) {
                console.log("error", err);
            }
        } else {
            alert("select a file to upload");
        }
    }


    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data)
        try {
            if (Object.keys(data).length > 0) {
                await axios.post("http://localhost:4000/ad", data)
                console.log(data)
            } else {
                console.log('Aucune donnée à envoyer !');
            }
        } catch (error) {
            console.log('an error occured during submit form :', error);
        }
    }

    return (
        <>
            <h1>React File Upload</h1>
            <input
                type="file"
                onChange={(e) => {
                    if (e.target.files) {
                        setFile(e.target.files[0]);
                    }
                }}
            />
            <button onClick={handleImageUpload}>Upload Image</button>

            {imageURL ? (
                <>
                    <br />
                    <img
                        width={"500"}
                        alt="uploadedImg"
                        src={"http://localhost:8000" + imageURL}
                    />
                    <br />
                </>
            ) : null}
            <form onSubmit={handleSubmit(onSubmit)}>

                <label>
                    Titre de l'annonce : <br />
                    <input className="text-field" {...register("title")} {...register("title")} />
                </label>

                <br />
                <label>
                    Prix : <br />
                    <input className="text-field" {...register("price")} />
                </label>

                <br />
                <label>
                    Description : <br />
                    <input className="text-field" {...register("description")} />
                </label>

                <br />
                <label>
                    Nom du vendeur : <br />
                    <input className="text-field" {...register("owner")} />
                </label>

                {/* <label>
                    URL de l'image : <br />
                    <input className="text-field" {...register("imageUrl")} />
                </label> */}

                <br />
                <label>
                    Ville : <br />
                    <input className="text-field" {...register("location")} />
                </label>

                <br />
                <select {...register("category")} >
                    {categories.map((el) => (
                        <option value={el.id} key={el.id}>
                            {el.name}
                        </option>
                    ))}
                </select>
                <input className="button" type="submit" />
            </form>
        </>
    );

}

export default NewAd;