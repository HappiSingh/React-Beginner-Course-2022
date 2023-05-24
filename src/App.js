import "./App.css";
import Job from "./Job";

function App() {
  return (
    <div className="App">
      <Job salary={90000} position={"Junior SDE"} company={"Amazon"} />
      <Job salary={120000} position={"Senior SDE"} company={"Google"} />
      <Job salary={100000} position={"Project Manager"} company={"Netflix"} />
    </div>
  );
}



export default App;
