import React, { useState } from "react";
import BubbleChart from "./components/BubbleChart";
import LineChart from "./components/LineChart";
import Header from "./components/Header";

import "./App.css";
const App = () => {
    const [low, setLow] = useState([]);
    const [high, setHigh] = useState([]);
    const [open, setOpen] = useState([]);
    const [date, setDate] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [company, setCompany] = useState([]);
    const [other, setOther] = useState([]);
    const Base_url = "http://api.marketstack.com/v1";
    const key = "0469640507c513d9311110af33d220a6";

    const getData = (json_data) => {
        const stock_open = [];
        const stock_high = [];
        const stock_low = [];
        const stock_date = [];
        var static_num_vaibhav = json_data.pagination.count;

        for (var i = 0; i < static_num_vaibhav; i++) {
            stock_open.push(parseFloat(json_data.data.eod[i].open));
            stock_high.push(parseFloat(json_data.data.eod[i].high));
            stock_low.push(parseFloat(json_data.data.eod[i].low));
            stock_date.push(json_data.data.eod[i].date);
        }
        setLow(stock_low);
        setHigh(stock_high);
        setOpen(stock_open);
        setDate(stock_date);
        setCompany(json_data.data.name);
    };

    //`${Base_url}/eod?access_key=${key}&symbols=${userInput}`
    //http://api.marketstack.com/v1/tickers/AMZN/eod?access_key=0469640507c513d9311110af33d220a6

    const callAPI = async () => {
        try {
            const response = await fetch(
                `${Base_url}/tickers/${userInput}/eod?access_key=${key}`
            );
            setUserInput("");

            if (response.status === 422) {
                throw new Error(
                    "It seems that entered NASDAQ\n Stock Exchange symbol Doesnot exist\n please enter NASDAQ key again\n eg. amzn, aapl, intl "
                );
            } else if (response.status === 404) {
                throw new Error(
                    "It seems that entered NASDAQ\n Stock Exchange symbol Doesnot exist\n please enter NASDAQ key again\n eg. amzn, aapl, intl "
                );
            } else {
                const data_json = await response.json();
                getData(data_json);
            }
        } catch (error) {
            window.alert(error);
        }
    };

    const callAPI_header = async () => {
        //http://api.marketstack.com/v1/tickers/AAPL/intraday/latest?access_key=0469640507c513d9311110af33d220a6

        const response2 = await fetch(
            `${Base_url}/tickers/${userInput}/intraday/latest?access_key=${key}`
        );
        const data_json2 = await response2.json();
        //other_array.push(data_json2);

        setOther(data_json2);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        callAPI();
        callAPI_header();
    };

    return (
        <div className="app">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter NASDAQ eg. amzn"
                    onChange={(e) => {
                        e.preventDefault();
                        setUserInput(e.currentTarget.value.toUpperCase());
                    }}
                    className="dataInput"
                />
            </form>

            <Header data={other} company={company} />
            {company.length !== 0 ? (
                <div className="displayChart">
                    {/* <BubbleChart
                        data_low={low}
                        data_high={high}
                        data_open={open}
                        data_date={date}
                        className="lineChart"
                    />
                    <LineChart
                        data_low={low}
                        data_high={high}
                        data_open={open}
                        data_date={date}
                        className="lineChart"
                    /> */}
                </div>
            ) : null}
        </div>
    );
};

export default App;

//useEffect(async () => {
//   const response = await fetch(
//     `${Base_url}/eod?access_key=${key}&symbols=AMZN`
//   );
//  const json_data = await response.json();
//  getData(json_data);
//}, [count]);

//for (var i = 0; i < static_num_vaibhav; i++) {
//   stock_open.push(parseFloat(json_data.data[i].open));
//   stock_high.push(parseFloat(json_data.data[i].high));
//   stock_low.push(parseFloat(json_data.data[i].low));
//    stock_date.push(json_data.data[i].date);
//}
