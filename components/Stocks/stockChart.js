import React, { useEffect } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const MyStockChart = (stockChart) => {
  if (stockChart.stockChart) {
    const timestamp = stockChart.stockChart.timestamp;
    const quote = stockChart.stockChart.indicators.quote[0].close;
    const data = quote.map((quote, index) => [timestamp[index] * 1000, quote]);
    const options = {
      title: {
        text: "My stock chart",
      },
      series: [
        {
          data: data,
        },
      ],
    };
  }

  return (
    <div>
      {stockChart.stockChart ? (
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={"stockChart"}
          options={options}
        />
      ) : null}
    </div>
  );
};

export default MyStockChart;
