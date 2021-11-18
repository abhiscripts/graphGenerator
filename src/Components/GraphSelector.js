import React from "react";
//import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Checkbox } from "antd";
import { optionsGraph } from "./checkboxOptions";
import { graph_selector } from "../Redux/Actions/InputAction";
import "antd/dist/antd.css";
import "./App.css";

export default function GraphSelector() {
  const selectedGraph = useSelector((state) => state.inputData.selectedGraph);
  const dispatch = useDispatch();
  return (
    <div className="graphType">
      <p style={{ fontWeight: "bold", margin: "8px 0px 8px 0px" }}>
        Select Graph Type :
      </p>
      <Checkbox.Group
        options={optionsGraph}
        defaultValue={selectedGraph}
        onChange={(e) => dispatch(graph_selector(e))}
      />
    </div>
  );
}
