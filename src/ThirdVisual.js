import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Industrial Sector Wise Profits",
    yaxisname: "Sum of Profits(in Million Pound)",
    decimals: "1",
    theme: "fusion"
  },
  data: [
    {
      label: "Aerospace & Defence",
      value: "387409.19"
    },
    {
      label: "Alternative Energy",
      value: "7448.61"
    },
    {
      label: "Automobiles & Parts",
      value: "1272000.78"
    },
    {
      label: "Banks",
      value: "734744.65"
    },
    {
      label: "Beverages",
      value: "270453.22"
    },
    {
      label: "Biotechnology",
      value: "-192361.37"
    },
    {
      label: "Chemicals",
      value: "831481.68"
    }
  ]
};
const ThirdVisual = () => {
  return (
    <>
      <ReactFusioncharts
        type="column3d"
        width="100%"
        height="100%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    </>
  );
};

export { ThirdVisual };
