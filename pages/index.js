import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar/indexNavbar";
import Button from "@mui/material/Button";
import AutoComplete from "../components/autoComplete/index";
import DetailedStock from "../components/Stocks/detailedStock";
export default function Home() {
  const [choosenStock, setChoosenStock] = useState();
  const [detailedStock, setDetailedStock] = useState();
  const [stockChart, setStockChart] = useState();
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <Head>
        <title>Stock App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Indonesia Stock Searcher</h1>
        <AutoComplete
          setStock={setChoosenStock}
          setDetailedStock={setDetailedStock}
          setStockChart={setStockChart}
        ></AutoComplete>
        <DetailedStock
          stock={choosenStock}
          detailedStock={detailedStock}
          stockChart={stockChart}
        ></DetailedStock>
      </main>
    </div>
  );
}
