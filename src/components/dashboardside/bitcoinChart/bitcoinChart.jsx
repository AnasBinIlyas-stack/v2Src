import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import "./bitcoinChart.scss";

// API URL
const API_URL =
  "https://elementstage.octalooptechnologies.com/mine/chart/hashrate";

function BitcoinChart() {
  const [view, setView] = useState("month");
  const [year, setYear] = useState(2023);
  const [chartState, setChartState] = useState({
    series: [
      {
        name: "Bitcoin Mining Hashrate",
        data: [], // Initially empty, will be populated with API data
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#00aaff"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        width: 2,
      },
      title: {
        text: "Bitcoin Mining Hashrate",
        align: "left",
        style: {
          fontSize: "16px",
          color: "#fff",
        },
      },
      subtitle: {
        text: "Hashrate Over Time",
        align: "left",
        style: {
          fontSize: "24px",
          color: "#fff",
        },
      },
      grid: {
        borderColor: "#444",
        row: {
          colors: ["transparent"],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [], // Timestamps in human-readable format
        labels: {
          style: {
            colors: "#fff",
          },
        },
        axisBorder: {
          show: true,
          color: "#444",
        },
        axisTicks: {
          show: true,
          color: "#444",
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#fff",
          },
          formatter: function (value) {
            return Math.floor(value); // Format labels to integers
          },
        },
        tickAmount: 6, // Ensure y-axis shows integers up to 6
        min: 0,
      },
      legend: {
        labels: {
          colors: "#fff",
        },
      },
    },
  });

  // Function to get the last 7 months from the current date
  const getLastSevenMonths = () => {
    const months = [];
    const now = new Date();
    for (let i = 6; i >= 0; i--) {
      const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
      months.push(
        date.toLocaleString("default", { month: "short", year: "numeric" })
      );
    }
    return months;
  };

  // Function to calculate the week number of the year for a date
  const getWeekNumber = (date) => {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  };

  // Function to group data by week or month
  const groupData = (hashrateData, viewType) => {
    const filteredData = filterLastSevenMonths(hashrateData); // Only take data from the last 7 months

    if (viewType === "month") {
      const lastSevenMonths = getLastSevenMonths(); // Get the months for the x-axis
      const groupedByMonth = {};

      // Initialize all months to avoid missing data
      lastSevenMonths.forEach((month) => {
        groupedByMonth[month] = [];
      });

      filteredData.forEach((item) => {
        const date = new Date(item.timestamp * 1000);
        const month = date.toLocaleString("default", {
          month: "short",
          year: "numeric",
        });
        groupedByMonth[month].push(parseFloat(item.hashrate));
      });

      // Get monthly average hashrates
      const months = Object.keys(groupedByMonth);
      const avgHashrate = months.map(
        (month) =>
          groupedByMonth[month].length > 0
            ? groupedByMonth[month].reduce((acc, cur) => acc + cur, 0) /
              groupedByMonth[month].length
            : 0 // Set to 0 if no data for that month
      );

      return { categories: lastSevenMonths, data: avgHashrate };
    } else {
      // Group data by week
      const weeks = {};
      filteredData.forEach((item) => {
        const date = new Date(item.timestamp * 1000);
        const week = getWeekNumber(date); // Calculate week number
        const year = date.getFullYear();
        const weekKey = `W${week}-${year}`; // Week format: W<weekNumber>-<year>

        if (!weeks[weekKey]) {
          weeks[weekKey] = [];
        }
        weeks[weekKey].push(parseFloat(item.hashrate));
      });

      // Get weekly average hashrates
      const weekKeys = Object.keys(weeks);
      const avgHashrate = weekKeys.map(
        (weekKey) =>
          weeks[weekKey].reduce((acc, cur) => acc + cur, 0) /
          weeks[weekKey].length
      );

      return { categories: weekKeys, data: avgHashrate };
    }
  };

  // Function to filter data for the last 7 months
  const filterLastSevenMonths = (hashrateData) => {
    const lastSevenMonths = getLastSevenMonths(); // Get the last 7 months

    const filteredData = hashrateData.filter((item) => {
      const itemDate = new Date(item.timestamp * 1000);
      const itemMonth = itemDate.toLocaleString("default", {
        month: "short",
        year: "numeric",
      });
      return lastSevenMonths.includes(itemMonth); // Only include data for the last 7 months
    });

    return filteredData;
  };

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const result = await response.json();
        if (result.success && result.data && result.data.data) {
          const hashrateData = result.data.data;

          // Group data based on the current view (month or week)
          const groupedData = groupData(hashrateData, view);

          // Update the chart state with the grouped data
          setChartState((prevState) => ({
            ...prevState,
            series: [
              {
                name: "Bitcoin Mining Hashrate",
                data: groupedData.data,
              },
            ],
            options: {
              ...prevState.options,
              xaxis: {
                ...prevState.options.xaxis,
                categories: groupedData.categories, // Set categories to weeks or months
              },
            },
          }));
        }
      } catch (error) {
        console.error("Error fetching hashrate data:", error);
      }
    };

    fetchData();
  }, [view]); // Re-fetch data when the view changes

  const handleViewChange = (newView) => {
    setView(newView); // Set new view type
  };

  return (
    <div>
      <div
        style={{
          background:
            "linear-gradient(97deg, rgba(209, 14, 209, 0.25)12.04%, rgba(16, 163, 218, 0.25)81.84%)",
          padding: "20px",
          borderRadius: "8px",
          width: "100%",
          margin: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              color: "#fff",
              fontSize: "14px",
              border: "2px solid #D10ED1",
              borderRadius: "10px",
              height: "37px",
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <span
              style={{
                cursor: "pointer",
                padding: "10px",
                backgroundColor:
                  view === "month" ? "rgba(209, 14, 209, 0.50)" : "transparent",
              }}
              onClick={() => handleViewChange("month")}
            >
              Month
            </span>
            <span
              style={{
                cursor: "pointer",
                padding: "10px",
                backgroundColor:
                  view === "week" ? "rgba(209, 14, 209, 0.50)" : "transparent",
              }}
              onClick={() => handleViewChange("week")}
            >
              Week
            </span>
          </div>
        </div>
        <div id="chart">
          <ReactApexChart
            options={chartState.options}
            series={chartState.series}
            type="line"
            height={300}
          />
        </div>
      </div>
    </div>
  );
}

export default BitcoinChart;
