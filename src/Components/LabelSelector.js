import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Checkbox, Input, Button } from "antd";
import { PlusCircleTwoTone } from "@ant-design/icons";
import {
  label_selector,
  add_labels_option,
  update_graph_value,
} from "../Redux/Actions/InputAction";
import "antd/dist/antd.css";
import "./App.css";

export default function LabelSelector() {
  const [currLabel, setCurrLabel] = useState("");
  const selectedGraph = useSelector((state) => state.inputData.selectedGraph);
  const optionLabels = useSelector((state) => state.inputData.optionLabels);
  const dispatch = useDispatch();

  const updateLabels = () => {
    dispatch(update_graph_value({ labels: [], data: [] }));
    currLabel
      ? dispatch(add_labels_option({ label: currLabel, value: currLabel }))
      : //? optionLabels.push({ label: currLabel, value: currLabel })
        alert("label cannot be empty");
    setCurrLabel("");
  };

  return selectedGraph.length ? (
    <div className="graphType">
      <p style={{ fontWeight: "bold", margin: "8px 0px 8px 0px" }}>
        Update xAxis Labels :
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
            placeholder="Add xAxis Labels"
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
