import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Checkbox, Input, Button } from "antd";
import { PlusCircleTwoTone } from "@ant-design/icons";
import { optionLabels } from "./checkboxOptions";
import { label_selector } from "../Redux/Actions/InputAction";
import "antd/dist/antd.css";
import "./App.css";

export default function LabelSelector() {
  const [currLabel, setCurrLabel] = useState("");
  const selectedGraph = useSelector((state) => state.inputData.selectedGraph);
  const dispatch = useDispatch();

  const updateLabels = () => {
    currLabel
      ? optionLabels.push({ label: currLabel, value: currLabel })
      : alert("label cannot be empty");
    setCurrLabel("");
  };

  return selectedGraph.length ? (
    <div className="graphType">
      <p style={{ fontWeight: "bold", margin: "8px 0px 8px 0px" }}>
        Select Graph Labels :
      </p>
      <Checkbox.Group
        options={optionLabels}
        defaultValue={[]}
        onChange={(e) => dispatch(label_selector(e))}
      />
      <div style={{ paddingLeft: "4px" }}>
        <Input.Group compact>
          <Input
            style={{ width: "150px" }}
            placeholder="Add your Labels"
            value={currLabel}
            onChange={(e) => setCurrLabel(e.target.value)}
          />
          <Button type="text" shape="circle" onClick={updateLabels}>
            <PlusCircleTwoTone />
          </Button>
        </Input.Group>
      </div>
    </div>
  ) : null;
}
