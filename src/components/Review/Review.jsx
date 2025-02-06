import MyIcon from "../../assets/images/icon-star.svg?react"
function Review(props) {
    const greyStarsNumber = 5 - Number(props.star)
    const getStars = () => {
        const stars = new Array(props.star).fill(null);
        if (greyStarsNumber > 0) {
            const greyStars = new Array(greyStarsNumber).fill(null)
            return (
                <div className="review__stars">
                    {stars.map((_, index) => (
                        <MyIcon key={index} className="review__star" />
                    ))}
                    {greyStars.map((_, index) => (
                        <MyIcon key={index} className="review__star--not-active" />
                    ))}
                </div>
            );
        }
        else {
            return (
                <div className="review__stars">
                    {stars.map((_, index) => (
                        <MyIcon key={index} className="review__star" />
                    ))}
                </div>
            );
        }
    }

    const getContent = () => {
        if (props.star === 1) {
            return (
                <div className="review__content" >
                    <h2 className="review__content--text">Rated {props.star} Star in {props.place}</h2>
                </div>)
        }
        else {
            return (
                <div className="review__content">
                    <h2 className="review__content--text">Rated {props.star} Stars in {props.place}</h2>
                </div>)
        }
    }
    return (
        <div className="review">
            {getStars()}
            {getContent()}
        </div>
    )
}

export default Review