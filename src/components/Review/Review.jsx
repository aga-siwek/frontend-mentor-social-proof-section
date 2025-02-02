import MyIcon from "../../assets/images/icon-star.svg?react"
function Review(props){
    const getStars = ()=> {
        const stars = new Array(props.star).fill(null)
        return (
            <div className="review__stars">
              {stars.map((_, index) => (
                <MyIcon key={index} className = "review__star" />
              ))}
            </div>
          );
    }
    const getContent =() => {
        if (props.star===1){
            return (
                <div className="review__content">
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