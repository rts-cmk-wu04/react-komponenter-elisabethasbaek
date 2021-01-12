import "../style/PrettyBox.css";

function PrettyBox(props, {image, heading, text}) {    
    return (
        <>
            <article className="prettyBox" style={{backgroundColor:props.bGcolor}}>
                <img src={image} alt="" className="prettyBox__image"/>
                <h1 className="prettyBox__heading">{heading}</h1>
                <p className="prettyBox__text">{text}</p>
            </article>
        </>
    )
};

export default PrettyBox;