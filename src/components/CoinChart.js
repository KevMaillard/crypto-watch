import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CoinChart = ({ coinId, coinName }) => {


    const [duration, setDuration] = useState(30)
    const [coinData, setCoinData] = useState()

    const headerData = [
        [1, "1 jour"],
        [3, "3 jour"],
        [7, "7 jour"],
        [30, "1 mois"],
        [91, "3 mois"],
        [181, "6 mois"],
        [365, "1 an"],
        [3000, "Max"],
    ]

    useEffect(() => {
        let dataArray = []
        axios
            .get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${duration}${duration > 32 ? "&interval=daily" : ""}`)
            .then((res) => {
                for (let i = 0; i < res.data.prices.length; i++) {
                    let price = res.data.prices[i][1]
                    dataArray.push({
                        date: new Date(res.data.prices[i][0]).toLocaleDateString(),
                        price: price < "50" ? price : parseInt(price)
                    })
                }
                setCoinData(dataArray);
            })
    }, [])
    return (
        <div className="coin-chart">
            <p>{coinName}</p>
            <div className="btn-container">
                {headerData.map((el) => {
                    return (
                        <div
                            key={el[0]}
                            htmlFor={"btn" + el[0]}
                            onClick={() => setDuration(el[0])}
                            className={el[0] === duration ? "active-btn" : ""}
                        >
                            {el[1]}
                        </div>
                    )
                })}
            </div>
            
        </div>
    );
};

export default CoinChart;