import { useState } from "react";
import data from "./data";
import { Peoples } from "./components/Peoples";

const App = () => {
  const [people,setpeople]=useState(data);
  return (
    <main>
    <section className="container">
      <h1 style={{marginBottom:"1rem"}}>{people.length} Birthdays Today</h1>
      <Peoples people={people} setpeople={setpeople} />
    </section>
    </main>
  )
};
export default App;
