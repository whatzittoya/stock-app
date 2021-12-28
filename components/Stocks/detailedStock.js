import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import BoxDetailStock from "./boxDetailStock.js";
import StockChart from "./stockChart.js";
import { stockChart } from "highcharts";
import { fontSize } from "@mui/system";
export default function Home(props) {
  const { stock, detailedStock, stockChart } = props;

  useEffect(() => {}, []);
  //   console.log(stockChart);

  return (
    <div>
      {detailedStock ? (
        <>
          <h2>
            {detailedStock.price.longName} ({detailedStock.price.symbol} )
          </h2>
          <h3>
            <span
              style={{
                fontSize: 22,
              }}
            >
              <b>{detailedStock.price.regularMarketPrice.fmt}</b>{" "}
            </span>
            <span
              style={{
                fontSize: 18,
                color:
                  detailedStock.price.regularMarketChange.raw > 0
                    ? "green"
                    : "red",
                padding: "0px 10px",
              }}
            >
              {detailedStock.price.regularMarketChange.raw}
            </span>
            <span
              style={{
                fontSize: 18,
                color:
                  detailedStock.price.regularMarketChange.raw > 0
                    ? "green"
                    : "red",
                padding: "0px 10px",
              }}
            >
              ({detailedStock.price.regularMarketChangePercent.fmt})
            </span>
          </h3>
          <BoxDetailStock detailedStock={detailedStock} />
          <StockChart stockChart={stockChart}></StockChart>
        </>
      ) : (
        <h1></h1>
      )}
    </div>
  );
}
