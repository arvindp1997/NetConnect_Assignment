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
    theme: "fusion",
  },
  data: [
    {
      label: "Argentina",
      value: null,
    },
    {
      label: "Australia",
      value: 854851,
    },
    {
      label: "Austria",
      value: 611130,
    },
    {
      label: "Belgium",
      value: 1072679,
    },
    {
      label: "Bermuda",
      value: 99667,
    },
    {
      label: "Brazil",
      value: 1517841,
    },
    {
      label: "Canada",
      value: 999279,
    },
    {
      label: "Cayman Islands",
      value: 147565,
    },
    {
      label: "China",
      value: 23413203,
    },
    //  {
    //    "label": "Colombia",
    //    "value": 38921
    //  },
    //  {
    //    "label": "Czech Republic",
    //    "value": 33460
    //  },
    //  {
    //    "label": "Denmark",
    //    "value": 863142
    //  },
    //  {
    //    "label": "Finland",
    //    "value": 1149026
    //  },
    //  {
    //    "label": "France",
    //    "value": 11726498
    //  },
    //  {
    //    "label": "Germany",
    //    "value": 18413130
    //  },
    //  {
    //    "label": "Greece",
    //    "value": 17878
    //  },
    //  {
    //    "label": "Hong Kong",
    //    "value": 270611
    //  },
    //  {
    //    "label": "Hungary",
    //    "value": 14561
    //  },
    //  {
    //    "label": "Iceland",
    //    "value": 9904
    //  },
    //  {
    //    "label": "India",
    //    "value": 2339311
    //  },
    //  {
    //    "label": "Iraq",
    //    "value": 5888
    //  },
    //  {
    //    "label": "Ireland",
    //    "value": 1592270
    //  },
    //  {
    //    "label": "Israel",
    //    "value": 436401
    //  },
    //  {
    //    "label": "Italy",
    //    "value": 3727633
    //  },
    //  {
    //    "label": "Japan",
    //    "value": 31601001
    //  },
    //  {
    //    "label": "Liechtenstein",
    //    "value": 42036
    //  },
    //  {
    //    "label": "Luxembourg",
    //    "value": 816736
    //  },
    //  {
    //    "label": "Malaysia",
    //    "value": 297552
    //  },
    //  {
    //    "label": "Malta",
    //    "value": 5183
    //  },
    //  {
    //    "label": "Mexico",
    //    "value": 123692
    //  },
    //  {
    //    "label": "Netherlands",
    //    "value": 4278455
    //  },
    //  {
    //    "label": "New Zealand",
    //    "value": 125569
    //  },
    //  {
    //    "label": "Norway",
    //    "value": 1224368
    //  },
    //  {
    //    "label": "Poland",
    //    "value": 2201
    //  },
    //  {
    //    "label": "Portugal",
    //    "value": 193891
    //  },
    //  {
    //    "label": "Russia",
    //    "value": 1331979
    //  },
    //  {
    //    "label": "Saudi Arabia",
    //    "value": 1177240
    //  },
    //  {
    //    "label": "Singapore",
    //    "value": 146377
    //  },
    //  {
    //    "label": "Slovenia",
    //    "value": 14833
    //  },
    //  {
    //    "label": "South Africa",
    //    "value": 143317
    //  },
    //  {
    //    "label": "South Korea",
    //    "value": 9108190
    //  },
    //  {
    //    "label": "Spain",
    //    "value": 2708606
    //  },
    //  {
    //    "label": "Sweden",
    //    "value": 2116491
    //  },
    //  {
    //    "label": "Switzerland",
    //    "value": 3966512
    //  },
    //  {
    //    "label": "Taiwan",
    //    "value": 5125375
    //  },
    //  {
    //    "label": "Thailand",
    //    "value": 8535
    //  },
    //  {
    //    "label": "Turkey",
    //    "value": 429871
    //  },
    //  {
    //    "label": "UK",
    //    "value": 13637030
    //  },
    //  {
    //    "label": "Ukraine",
    //    "value": 2461
    //  },
    //  {
    //    "label": "United Arab Emirates",
    //    "value": 59761
    //  },
    //  {
    //    "label": "USA",
    //    "value": 46973283
    //  },
    //  {
    //    "label": "Venezuela",
    //    "value": 504837
    //  },
    //  {
    //    "label": "",
    //    "value": null
    //  }
  ],
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
