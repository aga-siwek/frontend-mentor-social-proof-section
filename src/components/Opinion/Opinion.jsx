function Opinion(props){
    const verified = () => {
        let buyer = ""
        if (props.verified === true) {
            buyer = "Verified Buyer"
        }
        else {
            buyer = "Not Verified Buyer"
        }
        return buyer

    }
    return (
        <div className="opinion">
            <div className="opinion__person">
                <img src={props.avatar} className="opinion__avatar"/>
                <div className="opinion__personal-data">
                    <div className="opinion__name"><p>{props.name}</p></div>
                    <div className="opinion__verified"><p>{verified()}</p></div>
                </div>
            </div>
            <div className="opinion__notice"><p>“ {props.notice} ”</p>
            </div>
        </div>
    )
}

export default Opinion