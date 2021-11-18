// import { useState } from "react";
// import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
// import { Checkbox, Input, Button } from "antd";
// import { PlusCircleTwoTone } from "@ant-design/icons";
// import { backgroundColors, borderColors, chartOptions } from "./chartUtils";
// import { optionLabels, optionsGraph } from "./checkboxOptions";
// import "antd/dist/antd.css";
// import "./App.css";

// const renderLabelsCheckBox = () => {
//     return (
//       selectedGraph.length ? (<div className="graphType">
//         <p style={{ fontWeight: "bold", margin: "8px 0px 8px 0px" }}>
//           Select Graph Labels :
//         </p>
//         <Checkbox.Group
//           options={optionLabels}
//           defaultValue={[]}
//           onChange={(e) => setSelectedLabels(e)}
//         />
//         <div style={{ paddingLeft: "4px" }}>
//           <Input.Group compact>
//             <Input
//               style={{ width: "150px" }}
//               placeholder="Add your Labels"
//               value={currLabel}
//               onChange={(e) => setCurrLabel(e.target.value)}
//             />
//             <Button type="text" shape="circle" onClick={updateLabels}>
//               <PlusCircleTwoTone />
//             </Button>
//           </Input.Group>
//         </div>
//       </div>) : null
//     );
//   };

//   const renderDataMapping = () => {
//     const dataMap = selectedLabels.map((label) => {
//       return (
//         <Input
//           style={{ width: "250px" }}
//           prefix={`${label} : `}
//           key={label}
//           id={label}
//           placeholder={"Enter data"}
//           type="number"
//           onChange={(e) => handleDataInput(e)}
//         />
//       );
//     });

//     return selectedLabels.length ? (
//       <div className="graphType">
//         <p style={{ fontWeight: "bold", margin: "8px 0px 8px 0px" }}>
//           Update Graph Data :
//         </p>
//         {dataMap}
//         <Button type="primary" onClick={handleFinalData}>
//           Generate Graph
//         </Button>
//       </div>
//     ) : null;
//   };


//   const updateLabels = () => {
//     currLabel
//       ? optionLabels.push({ label: currLabel, value: currLabel })
//       : alert("label cannot be empty");
//     setCurrLabel("");
//   };

//   const handleDataInput = (e) => {
//     let key = `${e.target.id}`;
//     currGraphData[key] = e.target.value;
//     setCurrGraphData(currGraphData);
//   };

//   const handleFinalData = () => {
//     finalData["labels"] = selectedLabels;
//     finalData["data"] = selectedLabels.map(label => currGraphData[label]);
//     setFinalData(finalData);
//     setCurrGraphData({});
//     setSelectedLabels([]);
//   };