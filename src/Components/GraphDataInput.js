import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, Button } from "antd";
import "antd/dist/antd.css";
import "./App.css";
import {
  label_selector,
  update_graph_value,
  update_curr_graph_value,
} from "../Redux/Actions/InputAction";

export default function GraphDataInput() {
  const inputData = useSelector((state) => state.inputData);
  const dispatch = useDispatch();

  const renderDataMapping = () => {
    const dataMap = inputData.selectedLabels.map((label) => {
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
    return inputData.selectedLabels.length ? (
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
    inputData.currGraphData[key] = e.target.value;
    dispatch(update_curr_graph_value(inputData.currGraphData));
  };

  const handleFinalData = () => {
    inputData.finalData["labels"] = inputData.selectedLabels;
    inputData.finalData["data"] = inputData.selectedLabels.map(
      (label) => inputData.currGraphData[label]
    );
    dispatch(update_graph_value(inputData.finalData));
    dispatch(update_curr_graph_value({}));
    dispatch(label_selector([]));
  };

  return <div>{renderDataMapping()}</div>;
}
