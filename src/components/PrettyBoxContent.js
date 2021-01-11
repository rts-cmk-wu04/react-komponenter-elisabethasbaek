import "../style/PrettyBox.css";

function PrettyBoxContent({ cunt }) {
    return (
        <>
            <article className="prettyBox">
                <img src={cunt.image} alt={cunt.heading} />
                <h1>{cunt.heading}</h1>
                <p>{cunt.text}</p>
            </article>
        </>
    )
};

export default PrettyBoxContent; 