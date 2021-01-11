import { useState, useEffect } from "react";
import PrettyBoxContent from "./PrettyBoxContent";

function PrettyBox() {
  var [content, setContent] = useState([]);

  useEffect(function () {
    fetch("./data/prettyboxes.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        setContent(data);
      });
  }, []);

  return (
    <>
      {content.map(function (cunt) {
        return <PrettyBoxContent key={cunt.heading} cunt={cunt} />
      })}
    </>
  )
};

export default PrettyBox; 