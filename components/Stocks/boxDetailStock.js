import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
export default function Home(props) {
  const { detailedStock } = props;

  useEffect(() => {}, []);
  const checkProperty = (val) => {
    var ok = "";
    try {
      ok = val;
    } catch (error) {
      ok = "";
    }
    return ok;
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} xs={7}>
          <Grid item xs={6}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <label>Previous Close</label>
              </Grid>
              <Grid item xs={6}>
                <b>{detailedStock.price.regularMarketPreviousClose.fmt}</b>
              </Grid>
              <Grid item xs={6}>
                <label>Open</label>
              </Grid>
              <Grid item xs={6}>
                <b>{detailedStock.price.regularMarketOpen.fmt}</b>
              </Grid>

              <Grid item xs={6}>
                <label>Day's Range</label>
              </Grid>
              <Grid item xs={6}>
                <b>
                  {detailedStock.price.regularMarketDayLow.fmt} -
                  {detailedStock.price.regularMarketDayHigh.fmt}
                </b>
              </Grid>
              <Grid item xs={6}>
                <label>Volume</label>
              </Grid>
              <Grid item xs={6}>
                <b>{detailedStock.price.regularMarketVolume.fmt}</b>
              </Grid>
              <Grid item xs={6}>
                <label>Avg Volume</label>
              </Grid>
              <Grid item xs={6}>
                <b>{detailedStock.price.averageDailyVolume3Month.fmt}</b>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <label>Market Cap</label>
              </Grid>
              <Grid item xs={6}>
                <b>{detailedStock.summaryDetail.marketCap.fmt}</b>
              </Grid>
              <Grid item xs={6}>
                <label>Beta</label>
              </Grid>
              <Grid item xs={6}>
                <b>{detailedStock.summaryDetail.beta.fmt}</b>
              </Grid>

              <Grid item xs={6}>
                <label>EPS</label>
              </Grid>
              <Grid item xs={6}>
                <b>{detailedStock.defaultKeyStatistics.trailingEps.fmt}</b>
              </Grid>
              <Grid item xs={6}>
                <label>Foward Dividend & Yield</label>
              </Grid>
              <Grid item xs={6}>
                <b>
                  {detailedStock.summaryDetail.dividendRate.fmt} (
                  {detailedStock.summaryDetail.dividendYield.fmt})
                </b>
              </Grid>
              <Grid item xs={6}>
                <label>Ex-Divident Date</label>
              </Grid>
              <Grid item xs={6}>
                <b>{detailedStock.summaryDetail.exDividendDate.fmt}</b>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
