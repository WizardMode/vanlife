import React from "react"
import { Link, useSearchParams } from "react-router-dom"

function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [vans, setVan] = React.useState([])

    const typeFilter = searchParams.get("type")
    // console.log(typeFilter)

    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [])

    const displayVans = typeFilter
        ? vans.filter(van => van.type === typeFilter)
        : vans

    // const vanElements = vans.map(van => (
    const vanElements = displayVans.map(van => (
        <div key={van.id} className="van-tile">
            {/* <Link to={`/vans/${van.id}`}>  -> change to relative path, instead of absolute. 
                no template string require `` singe id is already a string */} 
                <Link to={van.id}>
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button
                    onClick={() => handleFilterChange("type", "simple")}
                    className={
                        `van-type simple ${typeFilter === "simple" ? "selected" : ""}`
                    }
                >Simple</button>
                <button
                    onClick={() => handleFilterChange("type", "luxury")}
                    className={
                        `van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`
                    }
                >Luxury</button>
                <button
                    onClick={() => handleFilterChange("type", "rugged")}
                    className={
                        `van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`
                    }
                >Rugged</button>

                {typeFilter? (
                    <button
                        onClick={() => handleFilterChange("type", null)}
                        className="van-type clear-filters"
                    >Clear filter</button>
                ) : null}

            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}

export default Vans

/*
<Link 
    to="?type=simple"
    className="van-type simple"
>
    Simple
</Link>
<Link 
    to="?type=luxury"
    className="van-type luxury"
>
    Luxury
</Link>
<Link
    to="?type=rugged"
    className="van-type rugged"
>
    Rugged
</Link>
<Link 
    to="."
    className="van-type clear-filters"
>
    Clear filter
</Link>
*/

/*

<div className="van-list-filter-buttons">
    <button
        onClick={() => setSearchParams({type: "simple"})}
        className="van-type simple"
    >Simple</button>
    <button
        onClick={() => setSearchParams({type: "luxury"})}
        className="van-type luxury"
    >Luxury</button>
    <button
        onClick={() => setSearchParams({type: "rugged"})}
        className="van-type rugged"
    >Rugged</button>
    <button
        onClick={() => setSearchParams({})}
        lassName="van-type clear-filters"
    >Clear filter</button>
    </div>

*/