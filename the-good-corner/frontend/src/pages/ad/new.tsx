const NewAd = () => {


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
            <label>
                Propriétaire : <br />
                <input className="text-field" name="propriétaire" />
            </label>
            <br />
            <label>
                Image : <br />
                <input className="text-field" name="image" />
            </label>
            <br />
            <label>
                Localisation <br />
                <input className="text-field" name="localisation" />
            </label>
            <br /><br />
            <button className="button"> Submit </button>
        </form>
    );
}

export default NewAd;