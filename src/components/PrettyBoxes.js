import { useState, useEffect } from "react";
import "../style/PrettyBoxes.css";
import PrettyBox from "./PrettyBox";

function PrettyBoxes() {
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
            <section className="prettyBoxes">
                <PrettyBox bGcolor="#005AEE" />
                <PrettyBox bGcolor="#FFA767" />
                <PrettyBox bGcolor="#0AACDC" />
                <PrettyBox bGcolor="#597AEF" />
            </section>
        </>
    )
};

export default PrettyBoxes; 