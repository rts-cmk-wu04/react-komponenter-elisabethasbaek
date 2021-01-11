import "../style/PrettyBoxes.css";
import PrettyBox from "./PrettyBox";

function PrettyBoxes(image, heading, text) {
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