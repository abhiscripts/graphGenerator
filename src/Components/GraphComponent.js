import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import {
  backgroundColors,
  borderColors,
  chartOptions,
} from "../Utils/chartUtils";
import "./App.css";

function GraphComponent() {
  const inputData = useSelector((state) => state.inputData);
  const data = {
    labels: inputData.finalData.labels.length
      ? inputData.finalData.labels
      : inputData.selectedLabels,
    datasets: [
      {
        label: "",
        data: inputData.finalData.data.length
          ? inputData.finalData.data
          : inputData.selectedLabels.map(
              (label) => inputData.currGraphData[label]
            ),
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
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
    const graphSelections = inputData.selectedGraph.map((graph) => {
      return graphObj[graph];
    });

    return graphSelections;
  };

  return <div className="chart-style">{renderGraph()}</div>;
}

export default GraphComponent;
