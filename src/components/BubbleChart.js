import React from "react";
import { Bubble } from "react-chartjs-2";

const BubbleChart = ({ data_open, data_low, data_high, data_date }) => {
    return (
        <div>
            <Bubble
                data={{
                    labels: data_date,
                    datasets: [
                        {
                            label: "open",
                            data: data_open,
                            borderColor: "#17B890",
                            backgroundColor: "#17b89021",
                        },
                        {
                            label: "Low",
                            data: data_low,
                            borderColor: "#FF5964",
                            backgroundColor: "#FF596421",
                        },
                        {
                            label: "High",
                            data: data_high,
                            borderColor: "#FFE74C",
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
                            left: 0,
                            right: 25,
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
                                type: "time",
                                time: {
                                    displayFormats: {
                                        quarter: "MMM YYYY",
                                    },
                                },
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

export default BubbleChart;
