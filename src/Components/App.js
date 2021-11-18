import DataInput from "./DataInput";
import GraphComponent from "./GraphComponent";

function App() {
  return (
    <div className="Main">
      <div className="site-page-header">
        <h2>Graph Creator</h2>
      </div>
      <DataInput />
      <GraphComponent />
    </div>
  );
}

export default App;
