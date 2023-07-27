import React from "react"
import { Link, useParams, useLocation } from "react-router-dom"
import { getVans } from "../../api"

function VanDetail() {
    // const params = useParams()
    const { id } = useParams() 
    const location = useLocation()
    // console.log(location.state.search.slice(6, ))
    const [van, setVan] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    /*
    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    },[params.id])*/

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVans(id)
                setVan(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [id])

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    // const search = location.state && location.state.search || "" // <- before optional chaining 
    const search = location.state?.search || "" // <- optinal chaining
    const type = location.state?.type || "all"

    return (
        <div className="van-detail-container">
            <Link
                // to=".." -> useLocation
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to {type} vans</span></Link>

            {van? (
                <div className="van-detail">
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}

export default VanDetail