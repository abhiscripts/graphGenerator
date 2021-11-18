import "./App.css";
import GraphDataInput from "./GraphDataInput";
import GraphSelector from "./GraphSelector";
import LabelSelector from "./LabelSelector";

export default function DataInput() {
  return (
    <div className="App">
      <GraphSelector />
      <LabelSelector />
      <GraphDataInput />
    </div>
  );
}
