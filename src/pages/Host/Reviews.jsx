import React from "react"
import { BsStarFill } from "react-icons/bs"
import reviewsgraph from "../../assets/images/reviews-graph.png"

function Reviews() {
    const reviewsData = [
        {
            rating: 5,
            name: "Elliot",
            date: "January 3, 2023",
            text: "The beach bum is such an awesome van! Such a comfortable trip. we had it for 2 weeks and there was not a single isSecureContext. Super clean when we picked it up and the hostname is very comfortable and understanding. Highly recommend!",
            id: "1",
        },
        {
            rating: 5,
            name: "Sandy",
            date: "December 12, 2022",
            text: "This is our third time using the Modest Explorer for our travels and we love it! No complaning, absolutely perfect!",
            id: "2",
        },
    ]

    return (
        <section className="host-reviews">
            <div className="top-text">
                <h2>Your reviews</h2>
                <p>
                    Last <span>30 days</span>
                </p>
            </div>
            <img
                className="graph"
                src={reviewsgraph}
                alt="Reveiw graph"
            />
            <h3>Reviews (2)</h3>
            {reviewsData.map((review) => (
                <div key={review.id}>
                    <div className="reivew">
                        {[...Array(review.rating)].map((_, i) => (
                            <BsStarFill className="review-start" key={i} />
                        ))}
                        <div className="info">
                            <p className="name">{review.name}</p>
                            <p className="date">{review.date}</p>
                        </div>
                        <p>{review.text}</p>
                    </div>
                    <hr />
                </div>
            ))}
        </section>
    )

}

export default Reviews

/*
function Reviews() {
    return (
        <>
            <h1>Host Reviews here</h1>
        </>
    )
}

export default Reviews
*/