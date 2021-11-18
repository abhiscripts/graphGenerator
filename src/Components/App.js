import { Button } from "antd";
import { useSelector } from "react-redux";
import DataInput from "./DataInput";
import GraphComponent from "./GraphComponent";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import "./App.css";
import "antd/dist/antd.css";

function App() {
  const preview = useSelector((state) => state.inputData.preview);
  const printDocument = () => {
    const input = document.getElementById("graphs");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      //const pdf = new jsPDF();
      const pdf = new jsPDF("p", "mm", "a4");
      const width = pdf.internal.pageSize.getWidth();
      const height = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "JPEG", 0, 0, width, height);
      pdf.save("GraphGenerator.pdf");
    });
  };

  return (
    <div>
      <div className="site-page-header">
        <h2 className="titleArea">Graph Creator</h2>
        <DataInput />
      </div>

      <div className="pdfDownload">
        {preview && (
          <Button type="primary" onClick={printDocument}>
            Download PDF
          </Button>
        )}
      </div>
      <div id="graphs" class={preview && "page"}>
        <GraphComponent />
      </div>
    </div>
  );
}

export default App;
