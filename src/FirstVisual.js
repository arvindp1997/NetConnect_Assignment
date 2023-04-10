import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Country Wise Sales",
    yaxisname: "Sum of Sales(in Million Pound)",
    showvalues: "1",
    numberprefix: "£",
    theme: "fusion"
  },
  data: [
    {
      label: "Argentina",
      value: "854851"
    },
    {
      label: "Australia",
      value: "611130"
    },
    {
      label: "Austria",
      value: "1072679"
    }
  ]
};

const FirstVisual = () => {
  return (
    <>
      {" "}
      <ReactFusioncharts
        type="bar3d"
        width="100%"
        height="100%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    </>
  );
};

export { FirstVisual };
