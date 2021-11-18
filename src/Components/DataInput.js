import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Input, Button } from "antd";
import "antd/dist/antd.css";
import "./App.css";
import GraphComponent from "./GraphComponent";
import GraphSelector from "./GraphSelector";
import LabelSelector from "./LabelSelector";
import { label_selector } from "../Redux/Actions/InputAction";

export default function DataInput() {

  const [currGraphData, setCurrGraphData] = useState({ Random: 10 });
  const [finalData, setFinalData] = useState({ labels: [], data: [] });
  const selectedGraph = useSelector((state) => state.inputData.selectedGraph);
  const selectedLabels = useSelector((state) => state.inputData.selectedLabels);
  const dispatch = useDispatch();

  const renderDataMapping = () => {
    const dataMap = selectedLabels.map((label) => {
      return (
        <Input
          style={{ width: "250px" }}
          prefix={`${label} : `}
          key={label}
          id={label}
          placeholder={"Enter data"}
          type="number"
          onChange={(e) => handleDataInput(e)}
        />
      );
    });
    return selectedLabels.length ? (
      <div className="graphType">
        <p style={{ fontWeight: "bold", margin: "8px 0px 8px 0px" }}>
          Update Graph Data :
        </p>
        {dataMap}
        <Button type="primary" onClick={handleFinalData}>
          Generate Graph
        </Button>
      </div>
    ) : null;
  };


  const handleDataInput = (e) => {
    let key = `${e.target.id}`;
    currGraphData[key] = e.target.value;
    setCurrGraphData(currGraphData);
  };

  const handleFinalData = () => {
    finalData["labels"] = selectedLabels;
    finalData["data"] = Object.values(currGraphData);
    setFinalData(finalData);
    setCurrGraphData({});
    dispatch(label_selector([]));
  };
  return (
    <div>
      <div className="App">
        <GraphSelector/>
        <div className="graphType">
          <LabelSelector/>
          {renderDataMapping()}
        </div>
      </div>
      <GraphComponent
        finalData={finalData}
        selectedLabels={selectedLabels}
        selectedGraph={selectedGraph}
        currGraphData={currGraphData}
      />
    </div>
  );
}
