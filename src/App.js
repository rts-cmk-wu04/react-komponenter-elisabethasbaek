import "./style/App.css";
import PrettyBox from "./components/PrettyBox.js";

function App() {
  return (
    <>
      <main className="main">
        <section className="prettyBoxes">
          <PrettyBox />
        </section>
      </main>
    </>
  )
};

export default App; /* being rendered in ./index.js */