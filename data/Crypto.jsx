import { cryptoList, cryptoName } from './Data'
import axios from 'axios'

export async function fetchCryptoRating(setTables, setPrices, setColor, prices, isMobile) {
    const responce = await axios.get('https://api.coincap.io/v2/assets')
    const serverData = responce.data.data.filter(item => cryptoList.indexOf(item.symbol) != -1)
    const tables = []
    const priceData = []
    const colors = []
    var count = 0
    serverData.forEach(item => {
        if (prices) {
            if (parseFloat(item.priceUsd).toFixed(2) > prices[count]) {
                colors.push('#23C14F')
            }
            if (parseFloat(item.priceUsd).toFixed(2) < prices[count]) {
                colors.push('#FF4545')
            }
            if (parseFloat(item.priceUsd).toFixed(2) == prices[count]) {
                colors.push('#433532')
            }
        }
        else {
            colors.push('#433532')
        }
        const itemData = isMobile ? [
            item.name,
            `${parseFloat(item.priceUsd).toFixed(2)} $`,
            `${parseFloat(item.changePercent24Hr)}`.includes('-') ? `${parseFloat(item.changePercent24Hr).toFixed(2)} %` : `+${parseFloat(item.changePercent24Hr).toFixed(2)} %`
        ] : [
            item.name,
            item.symbol,
            `${parseFloat(item.priceUsd).toFixed(2)} $`,
            `${parseInt(item.marketCapUsd)} $`,
            `${parseFloat(item.changePercent24Hr)}`.includes('-') ? `${parseFloat(item.changePercent24Hr).toFixed(2)} %` : `+${parseFloat(item.changePercent24Hr).toFixed(2)} %`
        ]
        tables.push(itemData)
        priceData.push(parseFloat(item.priceUsd).toFixed(2))
        count ++
    })
    setTables(tables)
    setPrices(priceData)
    setColor(colors)
}

// export async function fetchCryptoRating(setTables, setPrices, setColor, prices, isMobile) {
//     const tables = []
//     const priceData = []
//     const colors = []
//     const options = {
//         method: 'GET',
//         url: 'https://binance43.p.rapidapi.com/ticker/24hr',
//         headers: {
//             'X-RapidAPI-Host': 'binance43.p.rapidapi.com',
//             'X-RapidAPI-Key': '7279bc897amsh20fd17451c09853p11fa92jsncd98e6fc3381'
//         }
//     };
//     const result = await axios.request(options)
//     var serverData = result.data.filter(item => cryptoList.indexOf(item.symbol) != -1)
//     var count = 0
//     serverData.forEach(item => {
//         if (prices) {
//             if (parseInt(item.lastPrice) > prices[count]) {
//                 colors.push('#23C14F')
//             }
//             if (parseInt(item.lastPrice) < prices[count]) {
//                 colors.push('#FF4545')
//             }
//             if (parseInt(item.lastPrice) == prices[count]) {
//                 colors.push('#433532')
//             }
//         }
//         else {
//             colors.push('#433532')
//         }
//         const itemData = isMobile ? [
//             cryptoName[count],
//             `${parseInt(item.lastPrice)} $`,
//             `${parseFloat(item.priceChangePercent).toFixed(2)} %`
//         ] : [
//             cryptoName[count],
//             cryptoList[count].slice(0, 3),
//             `${parseInt(item.lastPrice)} $`,
//             `${parseInt(item.lastPrice) * 19200000} $`,
//             `${parseFloat(item.priceChangePercent).toFixed(2)} %`
//         ]
//         tables.push(itemData)
//         priceData.push(parseInt(item.lastPrice))
//         count ++
//     })
//     setTables(tables)
//     setPrices(priceData)
//     setColor(colors)
// }