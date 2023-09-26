import { useRouter } from "next/router"

const AdDetailComponent = () => {
    const router = useRouter();
    console.log(router);

    return (
        <div>Display details of ad with id {router.query.id}</div>
    )
}

export default AdDetailComponent