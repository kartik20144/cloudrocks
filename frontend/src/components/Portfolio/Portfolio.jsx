import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  ComposedChart,
  LabelList,
} from "recharts";


const renderCustomizedLabel = (props) => {
  const { x, y, value } = props;


  return (
    <text 
      x={x} 
      y={y} 
      dy={-40} 
      dx={-10}  
      fill="#8884d8" 
      fontSize={16} 
      textAnchor="middle"
      background={{ fill: '#fff' }} 
    >
     &#163;{value}
    </text>
  );
};

const CustomDot = (props) => {
  const { cx, cy, value, index, data } = props;
  if (index === data.length - 3) {
    return (
      <circle
        cx={cx}
        cy={cy}
        r={5}
        stroke="#8884d8"
        strokeWidth={4}
        fill="#8884d8"
      />
    );
  }
  return null;
};

const Portfolio = () => {

  const [portfolioData, setPortfolioData] = useState([]);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const { data } = await axios.get("/api/portfolio");
        setPortfolioData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchPortfolio();
  }, []);

  return (
    <>
      <p className="text-4xl px-24 m-10 mb-5">Portfolio</p>
      <button
        href="#"
        class="text-sm  px-5 mx-40 font-medium bg-blue-100   py-1 rounded-xl text-blue-600 hover:underline dark:text-blue-500"
      >
        Settings
      </button>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart
          width={730}
          height={250}
          data={portfolioData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#E9EDFB" stopOpacity={1.0} />
              <stop offset="95%" stopColor="#E9EDFB" stopOpacity={0.4} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />

          <Tooltip />
          
          <Line
            type="monotone"
            strokeDasharray="15"
            dataKey="predictedValue"
            stroke="#BDC4E2"
            strokeWidth={5}
            fillOpacity={1}
            fill="url(#colorPv)"
            dot={false}
          >
            <LabelList dataKey="label" position="top" content={renderCustomizedLabel} />
          </Line>
          <Area
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            strokeWidth={5}
            fillOpacity={1}
            fill="url(#colorUv)"
            dot={<CustomDot data={portfolioData} />}
          />
          <text
            x="80%"
            y="60%"
            style={{ fontSize: 20, fill: "#808EC7" }}
            width={200}
            scaleToFit={true}
            textAnchor="right"
            verticalAnchor="right"
          >
            Our Prediction
          </text>
        </ComposedChart>
      </ResponsiveContainer>
    </>
  );
};

export default Portfolio;
