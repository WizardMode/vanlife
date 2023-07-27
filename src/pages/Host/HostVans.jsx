import React from "react"
import { Link } from "react-router-dom"
import { getHostVans } from "../../api"

function HostVans() {
    const [vans, setVans] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null) 

    /*
    React.useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])*/

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getHostVans()
                setVans(data)
            } catch(err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [])

    const hostVansEls = vans.map(van => (
        <Link
            /* to={`/host/vans/${van.id}`} -> use relative path instead of absolute path
                also no template string `` require, since id is already a string */
            to={van.id}
            key={van.id}
            className="host-van-link-wrapper"
        >
            <div className="host-van-single" key={van.id}>
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}</p>
                </div>
            </div>
        </Link>
    ))

    if (loading) {
        return <h1> Loading...</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                {
                    vans.length > 0 ? (
                        <section>
                            {hostVansEls}
                        </section>
                    ) : (
                        <h2>Loading...</h2>
                    )
                }
            </div>
        </section>
    )
}

export default HostVans