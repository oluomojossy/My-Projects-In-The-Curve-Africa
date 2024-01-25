import "./myAssignment.css"

function BigJoe(props) {

    return(
        <>
        <div className="parent">
           
            <div className="videoParent">
                <div className="left">
                    <div className="lefty" style={{backgroundColor: props.joseph}}>
                    <img src="./src/assets/play-button.png" alt="picture" className="img"/>
                    </div>
                    <div className="righty">
                    <h2>{props.title}</h2>
                        <h6>video description</h6>
                    </div>
                </div>
                <div className="right">
                <img src="./src/assets/heart.png" alt="picture" className="image"/>
                </div>
            </div>
        </div>
        </>
    )
}

export default BigJoe