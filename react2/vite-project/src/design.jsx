import "./design.css"

function Design(props) {

    return (
        <>
            <div className="process">
                <div className="leftContainer" style={{borderColor : props.txtBorder}}>
                    <div className="leftContainerInner" style={{backgroundColor: props.numBg}}>{props.num}</div>
                </div>
                <div className="rightContainer" style={{borderColor: props.txtBorder1 }}>
                    <h2 style={{color: props.textColor, textAlign: "center", width: props.txtwidth}}>
                    {props.txt}
                    </h2>
                </div>
            </div>
        </>
    ) 
    
} 


export default Design