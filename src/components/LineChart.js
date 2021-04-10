import React from "react";
import { Line } from "react-chartjs-2";
const LineChart = ({ data_open, data_low, data_high, data_date }) => {
    return (
        <div>
            <Line
                data={{
                    labels: [1, 20, 40, 60, 80, 100],
                    datasets: [
                        {
                            label: "open",
                            data: [
                                data_open[99],
                                data_open[79],
                                data_open[59],
                                data_open[39],
                                data_open[19],
                                data_open[0],
                            ],
                            borderColor: "#17B890",
                            borderWidth: 2,
                            backgroundColor: "#17B89021",
                        },
                        {
                            label: "Low",
                            data: [
                                data_low[99],
                                data_low[79],
                                data_low[59],
                                data_low[39],
                                data_low[19],
                                data_low[0],
                            ],
                            borderColor: "#FF5964",
                            borderWidth: 2,
                            backgroundColor: "#FF596421",
                        },
                        {
                            label: "High",
                            data: [
                                data_high[99],
                                data_high[79],
                                data_high[59],
                                data_high[39],
                                data_high[19],
                                data_high[0],
                            ],
                            borderColor: "#FFE74C",
                            borderWidth: 2,
                            backgroundColor: "#FFE74C21",
                        },
                    ],
                }}
                height={600}
                width={400}
                options={{
                    maintainAspectRatio: false,

                    layout: {
                        padding: {
                            left: 25,
                            right: 0,
                            top: 100,
                            bottom: 100,
                        },
                    },
                    legend: {
                        position: "bottom",
                        labels: {
                            padding: 30,
                        },
                    },
                    scales: {
                        xAxes: [
                            {
                                ticks: {
                                    fontColor: "#F5F3F4gg",
                                    fontSize: "12",
                                },
                            },
                        ],
                        yAxes: [
                            {
                                ticks: {
                                    fontColor: "#F5F3F4gg",
                                    fontSize: "12",
                                },
                            },
                        ],
                    },
                }}
            />
        </div>
    );
};

export default LineChart;
