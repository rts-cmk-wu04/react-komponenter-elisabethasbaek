import { useState, useEffect } from "react";
import "../style/PrettyBox.css";

function PrettyBox(props, {image, heading, text}) {
    var [content, setContent] = useState([]);

    useEffect(function () {
        fetch("./data/prettyboxes.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            setContent(data);
        });
    }, []);
    
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