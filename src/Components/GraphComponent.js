import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import { backgroundColors, borderColors, chartOptions } from "./chartUtils";
import "./App.css";

function GraphComponent(props) {
  const data = {
    labels: props.finalData.labels.length
      ? props.finalData.labels
      : props.selectedLabels,
    datasets: [
      {
        label: "Number of Votes",
        data: props.finalData.data.length
          ? props.finalData.data
          : props.selectedLabels.map((label) => props.currGraphData[label]),
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
    const graphSelections = props.selectedGraph.map((graph) => {
      return graphObj[graph];
    });

    return graphSelections;
  };

  return <div className="chart-style">{renderGraph()}</div>;
}

export default GraphComponent;
