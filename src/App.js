import { useState } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import { Checkbox, Input, Button } from "antd";
import { PlusCircleTwoTone } from "@ant-design/icons";
import { backgroundColors, borderColors, chartOptions } from "./chartUtils";
import { optionLabels, optionsGraph } from "./checkboxOptions";
import "antd/dist/antd.css";
import "./App.css";

function App() {
  const [selectedGraph, setSelectedGraph] = useState([]);
  const [selectedLabels, setSelectedLabels] = useState([]);
  const [currGraphData, setCurrGraphData] = useState({"Random":10});
  const [currLabel, setCurrLabel] = useState("");
  const [finalData, setFinalData] = useState({ labels: [], data: [] });

  const data = {
    labels: finalData.labels.length ? finalData.labels : selectedLabels,
    datasets: [
      {
        label: "Number of Votes",
        data: finalData.data.length ? finalData.data : selectedLabels.map(label => currGraphData[label]),
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
        yAxisID: 'Votes',
      },
    ],
  };

  const renderGraph = () => {
    const graphObj = {
      Bar: (
        <div className="graph-view" key="Bar">
          <Bar data={data} options={chartOptions} />
        </div>
      ),
      Line: (
        <div className="graph-view" key="Line">
          <Line data={data} options={chartOptions} />
        </div>
      ),
      Doughnut: (
        <div className="graph-view" key="Doughnut">
          <Doughnut data={data} options={chartOptions} />
        </div>
      ),
      Pie: (
        <div className="graph-view" key="Pie">
          <Pie data={data} options={chartOptions} />
        </div>
      ),
    };
    const graphSelections = selectedGraph.map((graph) => {
      return graphObj[graph];
    });

    return graphSelections;
  };

  const renderGraphCheckBox = () => {
    return (
      <div className="graphType">
        <p style={{ fontWeight: "bold", margin: "8px 0px 8px 0px" }}>
          Select Graph Type :
        </p>
        <Checkbox.Group
          options={optionsGraph}
          defaultValue={selectedGraph}
          onChange={(e) => setSelectedGraph(e)}
        />
      </div>
    );
  };

  const renderLabelsCheckBox = () => {
    return (
      selectedGraph.length ? (<div className="graphType">
        <p style={{ fontWeight: "bold", margin: "8px 0px 8px 0px" }}>
          Select Graph Labels :
        </p>
        <Checkbox.Group
          options={optionLabels}
          defaultValue={[]}
          onChange={(e) => setSelectedLabels(e)}
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
      </div>) : null
    );
  };

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

  const updateLabels = () => {
    currLabel
      ? optionLabels.push({ label: currLabel, value: currLabel })
      : alert("label cannot be empty");
    setCurrLabel("");
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
    setSelectedLabels([]);
  };

  return (
    <div className="Main">
      <div className="site-page-header">
        <h2>Graph Creator</h2>
      </div>
      <div className="App">
        {renderGraphCheckBox()}
        <div className="graphType">
          {renderLabelsCheckBox()}
          {renderDataMapping()}
        </div>
      </div>
      <div className="chart-style">{renderGraph()}</div>
    </div>
  );
}

export default App;
