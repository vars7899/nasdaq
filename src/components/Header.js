import React from "react";
import "./Header.css";
import Moment from "react-moment";
const Header = ({ data, company }) => {
    return (
        <div className="container">
            {company.length !== 0 ? (
                <div className="wrapper">
                    <h1 className="symbol">{company}</h1>
                    <div className="box">
                        <div className="boxLeft">
                            <p>
                                Date:{" "}
                                <span>
                                    <Moment format="YYYY/MM/DD">
                                        {data.date}
                                    </Moment>
                                </span>
                            </p>
                            <p>
                                Exchange: <span>{data.exchange}</span>
                            </p>
                            <p>
                                High: <span>${data.high}</span>
                            </p>
                            <p>
                                Low: <span>${data.low}</span>
                            </p>
                        </div>
                        <div className="boxRight">
                            <p>
                                Close: <span>${data.close}</span>
                            </p>

                            <p>
                                Last: <span>${data.last}</span>
                            </p>
                            <p>
                                Open: <span>${data.open}</span>
                            </p>

                            <p>
                                Volume: <span>{data.volume}</span>
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                <h1 className="report">
                    Please enter NASDAQ symbol to generate result
                </h1>
            )}
        </div>
    );
};

export default Header;
