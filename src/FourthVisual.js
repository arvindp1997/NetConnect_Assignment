import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Yearly Sales, Capex, Profit, Market Cap",
    subcaption: "2010-2020",
    xaxisname: "Years",
    yaxisname: "Total sum of Sales, Capex, Profit, Market Cap in million pound",
    formatnumberscale: "1",
    plottooltext:
      "<b>$dataValue</b> was projected on <b>$seriesName</b> in $label",
    theme: "candy",
  },
  categories: [
    {
      category: [
        {
          label: "2010",
        },
        {
          label: "2011",
        },
        {
          label: "2012",
        },
        {
          label: "2013",
        },
        {
          label: "2014",
        },
        {
          label: "2015",
        },
        {
          label: "2016",
        },
        {
          label: "2017",
        },
        {
          label: "2018",
        },
        {
          label: "2019",
        },
        {
          label: "2020",
        },
      ],
    },
  ],
  dataset: [
    {
      seriesname: "Sales",
      data: [
        {
          value: 13894163,
        },
        {
          value: 15710758,
        },
        {
          value: 16854413,
        },
        {
          value: 16723019,
        },
        {
          value: 17972595,
        },
        {
          value: 17686790,
        },
        {
          value: 17910320,
        },
        {
          value: 18448033,
        },
        {
          value: 20351620,
        },
        {
          value: 21018395,
        },
        {
          value: 18952091,
        },
      ],
    },
    {
      seriesname: "Capex",
      data: [
        {
          value: 764435.7498,
        },
        {
          value: 892720.585,
        },
        {
          value: 1109092.789,
        },
        {
          value: 1087703.811,
        },
        {
          value: 1131195.571,
        },
        {
          value: 1127502.322,
        },
        {
          value: 1167878.202,
        },
        {
          value: 1151303.479,
        },
        {
          value: 1317342.829,
        },
        {
          value: 1404746.798,
        },
        {
          value: 1293241.058,
        },
      ],
    },
    {
      seriesname: "Profits",
      data: [
        {
          value: -6576872.37,
        },
        {
          value: 1702982.03,
        },
        {
          value: 1549539.65,
        },
        {
          value: 1555429.22,
        },
        {
          value: 1735387.21,
        },
        {
          value: 1518669.57,
        },
        {
          value: 1671173.01,
        },
        {
          value: 1909324.19,
        },
        {
          value: 2275661.44,
        },
        {
          value: 2077564.89,
        },
        {
          value: 1553985.01,
        },
      ],
    },
    {
      seriesname: "Market Cap",
      data: [
        {
          value: 14001791.78,
        },
        {
          value: 0,
        },
        {
          value: 0,
        },
        {
          value: 0,
        },
        {
          value: 0,
        },
        {
          value: 0,
        },
        {
          value: 23081916.37,
        },
        {
          value: 24538463.37,
        },
        {
          value: 27163043.76,
        },
        {
          value: 27269822.28,
        },
        {
          value: 33855136.24,
        },
        {
          value: null,
        },
      ],
    },
  ],
};

const FourthVisual = () => {
  return (
    <>
      <ReactFusioncharts
        type="mscolumn3d"
        width="100%"
        height="100%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    </>
  );
};

export { FourthVisual };
