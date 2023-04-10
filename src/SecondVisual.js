import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Yealy Sales",
    yaxisname: "Sum of Sales(in million pound)",
    anchorradius: "5",
    plottooltext: "Average yearly sales in $label is <b>$dataValue</b>",
    showhovereffect: "1",
    showvalues: "0",
    numbersuffix: "",
    theme: "gammel",
    anchorbgcolor: "#0072AA",
    palettecolors: "#0072AA"
  },
  data: [
    {
      label: "2010",
      value: "13894163"
    },
    {
      label: "2011",
      value: "15710758"
    },
    {
      label: "2012",
      value: "16854413"
    },
    {
      label: "2013",
      value: "16723019"
    },
    {
      label: "2014",
      value: "17972595"
    },
    {
      label: "2015",
      value: "17686790"
    },
    {
      label: "2016",
      value: "17910320"
    },
    {
      label: "2017",
      value: "18448033"
    },
    {
      label: "2018",
      value: "20351620"
    },
    {
      label: "2019",
      value: "21018395"
    },
    {
      label: "2020",
      value: "18952091"
    }
  ]
};

const SecondVisual = () => {
  return (
    <>
      <ReactFusioncharts
        type="spline"
        width="100%"
        height="100%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    </>
  );
};

export { SecondVisual };
