import React, { useState, useEffect } from "react";
import "./dashmining.scss";
import BitcoinChart from "../bitcoinChart/bitcoinChart";
import DDown from "../settings/DDown";

// API URLs
const API_URL = process.env.REACT_APP_VIA_BTC;
const COINGECKO_API_URL = process.env.REACT_APP_COINGECKO_API_URL;

const Dashmining = () => {
  const [totalEarning, setTotalEarning] = useState(null); // Store the fetched total profit
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track errors
  const [btcToUsdRate, setBtcToUsdRate] = useState(null); // Store BTC to USD rate

  useEffect(() => {
    // Fetch the BTC to USD exchange rate from CoinGecko API
    const fetchBtcToUsdRate = async () => {
      try {
        const response = await fetch(COINGECKO_API_URL);
        console.log(response);
        const data = await response.json();
        const rate = data.bitcoin.usd;
        console.log(rate);
        setBtcToUsdRate(rate); // Set the fetched rate
      } catch (err) {
        console.error("Error fetching BTC to USD rate:", err);
        setError("Failed to fetch BTC to USD rate");
      }
    };

    // Fetch the total profit from the mining API
    const fetchMiningData = async () => {
      try {
        const response = await fetch(API_URL);
        const result = await response.json();

        if (result.success && result.data && result.data.data) {
          const profitInBTC = parseFloat(result.data.data.total_profit);

          if (btcToUsdRate) {
            const totalEarningInUSD = (profitInBTC * btcToUsdRate).toFixed(2); // Convert BTC to USD
            setTotalEarning(totalEarningInUSD); // Set the total earning in USD
          }
        } else {
          setError("Failed to fetch mining data");
        }
      } catch (err) {
        setError("Error fetching mining data: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBtcToUsdRate(); // Fetch the BTC to USD rate
    fetchMiningData(); // Fetch mining data after getting the rate
  }, [btcToUsdRate]); // Ensure we fetch the data after btcToUsdRate is set

  return (
    <div>
      <div className="dashside-content">
        <div className="noti">
          <DDown />
        </div>
        <div className="dash-mining">
          <h2 className="text-white textexpansiva-bold text-uppercase mb-10">
            Mining
          </h2>
          <div className="mining-content">
            <div className="detail">
              <div className="earning">
                <div className="d-flex align-items-center gap-2">
                  <img src="/assets/images/dashboard/earning.png" alt="" />
                  <h4 className="text-white">Total Earning</h4>
                </div>
                <div className="d-flex justify-content-center">
                  {/* Show loading, error, or the actual total earning */}
                  {loading ? (
                    <h1 className="h1-small text-white">Loading...</h1>
                  ) : error ? (
                    <p className="h1-small text-white">$0</p>
                  ) : (
                    <h1 className="h1-small text-white">${totalEarning}</h1>
                  )}
                </div>
                <div className="d-flex justify-content-end">
                  <p className="extra-small light-green">+19,30%</p>
                </div>
              </div>

              {/* Additional earning details */}
              <div className="earning">
                <div className="d-flex align-items-center gap-2">
                  <img src="/assets/images/dashboard/earning.png" alt="" />
                  <h4 className="text-white">Estimated Earning</h4>
                </div>
                <div className="d-flex justify-content-center">
                  <h1 className="h1-small text-white">$300</h1>
                </div>
                <div className="d-flex justify-content-end">
                  <p className="extra-small light-green">+19,30%</p>
                </div>
              </div>

              <div className="earning">
                <div className="d-flex align-items-center gap-2">
                  <img src="/assets/images/dashboard/balance.png" alt="" />
                  <h4 className="text-white">Total Balance</h4>
                </div>
                <div className="d-flex justify-content-center">
                  <h1 className="h1-small text-white">$200</h1>
                </div>
                <div className="d-flex justify-content-end">
                  <p className="extra-small light-green">+19,30%</p>
                </div>
              </div>
            </div>

            <div className="detail-graph">
              <BitcoinChart />
            </div>
            <div className="more-info d-flex justify-content-between">
              <div className="manual d-flex gap-5">
                <div className="d-flex flex-column gap-2">
                  <p className="extra-small">
                    Minimum payout 49.99 worth of bitcoin
                  </p>
                  <button className="mixedcolor-btn">Manually pay out</button>
                </div>
                <div className="d-flex flex-column gap-2">
                  <p className="extra-small">
                    Minimum payout 49.99 worth of bitcoin
                  </p>
                  <button className="mixedcolor-btn">Manually pay out</button>
                </div>
              </div>
              <div>
                <button className="pink-btn">More Info</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashmining;
