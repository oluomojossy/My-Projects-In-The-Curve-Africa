import "./image.css"

function Image(props) {
    return (
        <>
            <div className="imageBody">
                <img src= {props.image} alt=""/>
            </div>
        </>
    ) 
}

export default Image