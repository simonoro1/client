import React, { useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Data } from "../utils/data";
import PieChart from "./PieChar";
import BarChart from "./BarChart";
import { Map } from "./Map";

Chart.register(CategoryScale);

const data = {
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

function DueBills() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 2,
      },
    ],
  });

  const [bills, setBills] = useState(null);
  return (
    <div className="w-full h-screen p-5 bg-gray-100 mt-20">
      <div className="">
        <h1 className="text-5xl font-light text-gray-700 mb-4">
          Panel de control
        </h1>
        <h5>
          <p className="font-bold text-gray-700 inline-block">
            {" "}
            Cuenta 21908574{" "}
          </p>
          <small>- PAUNERO WENCESLAO 2115 PB 1 - CORDOBA</small>
        </h5>
      </div>
      <hr className="mt-4" />
      <div className="grid grid-cols-3 grid-rows-3 gap-8 flex-wrap">
        <div
          className="row-span-2 h-full rounded-xl shadow-lg p-5  mt-3 bg-green-300"
          id="panelEstado"
        >
          ESTADO DE CUENTA
          <p className="text-4xl">$0,00</p>
          <label htmlFor="" className="text-white">sin deuda</label>
          <button className="w-full bg-blue-500 text-white p-1 rounded-full">FACTURAS ADEUDADAS</button>
          <p>Mayor consumo</p>
          <p>Factura digital</p>
          <p>Otras Consultas</p>
          <p>Ver mas tramites</p>
        </div>
        <div
          className="row-span-2 h-full mt-3 rounded-xl shadow-lg p-5 bg-white"
          id="panel_statics"
        >
          <BarChart chartData={chartData} />
          <PieChart chartData={chartData} />
        </div>
        <div
          className="row-span-2 h-full mt-3 rounded-xl shadow-lg p-5 bg-white"
          id="panel_map"
        >
          <Map/>
        </div>
        <div className="col-span-3 rounded-xl shadow-lg p-5  bg-white mt-5">
          <h1 className="font-medium mb-5 font-sans">Facturas adeudadas</h1>
          {bills ? (
            <div className=""></div>
          ) : (
            <div className="w-7/8 flex items-center bg-green-200 p-5 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="wow bounceIn"
                data-wow-delay=".4s"
                width="38"
                height="38"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#007E33"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <p>
                <strong>Estás al día!</strong> No tienes deuda.
              </p>
            </div>
          )}
          <a href="" className="flex justify-end mt-4">
            <p className="mb-3">
              Ver facturas pagadas
              <span>
                <i className="fa fa-chevron-right"></i>
              </span>
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default DueBills;
