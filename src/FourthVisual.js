import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Yearly Sales, Capex, Profit, Market Cap",
    subcaption: "2010-2013",
    xaxisname: "Years",
    yaxisname: "Total sum of Sales, Capex, Profit, Market Cap in million pound",
    formatnumberscale: "1",
    plottooltext:
      "<b>$dataValue</b> was projected on <b>$seriesName</b> in $label",
    theme: "candy"
  },
  categories: [
    {
      category: [
        {
          label: "2010"
        },
        {
          label: "2011"
        },
        {
          label: "2012"
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "Sales",
      data: [
        {
          value: "13894163"
        },
        {
          value: "15710758"
        },
        {
          value: "16854413"
        }
      ]
    },
    {
      seriesname: "Capex",
      data: [
        {
          value: "764435.7498"
        },
        {
          value: "892720.585"
        },
        {
          value: "1109092.789"
        }
      ]
    },
    {
      seriesname: "Profits",
      data: [
        {
          value: "-6576872.37"
        },
        {
          value: "1702982.03"
        },
        {
          value: "1549539.65"
        }
      ]
    },
    {
      seriesname: "Market Cap",
      data: [
        {
          value: "14001791.78"
        },
        {
          value: "0"
        },
        {
          value: "0"
        }
      ]
    }
  ]
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
