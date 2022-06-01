import { stockWorldList, stockWorldName } from './Data'
import axios from 'axios'

export async function fetchStocksWorldRating(setTables, setPrices, setColor, prices, isMobile) {
    const encodedParams = new URLSearchParams();
    encodedParams.append("n_results", "100");
    encodedParams.append("country", "United States");
    
    const options = {
      method: 'POST',
      url: 'https://investing4.p.rapidapi.com/stocks/overview',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Host': 'investing4.p.rapidapi.com',
        'X-RapidAPI-Key': '7279bc897amsh20fd17451c09853p11fa92jsncd98e6fc3381'
      },
      data: encodedParams
    };
    const responce = await axios.request(options)
    const serverData = responce.data.data.filter(item => stockWorldList.indexOf(item.symbol) != -1)
    const tables = []
    const priceData = []
    const colors = []
    var count = 0
    serverData.forEach(item => {
        if (prices) {
            if (parseFloat(item.last).toFixed(2) > prices[count]) {
                colors.push('#23C14F')
            }
            if (parseFloat(item.last).toFixed(2) < prices[count]) {
                colors.push('#FF4545')
            }
            if (parseFloat(item.last).toFixed(2) == prices[count]) {
                colors.push('#433532')
            }
        }
        else {
            colors.push('#433532')
        }
        const itemData = [
            `${stockWorldName[stockWorldList.indexOf(item.symbol)]}`,
            `${parseFloat(item.last).toFixed(2)} $`,
            `${item.change_percentage}`
        ]
        tables.push(itemData)
        priceData.push(parseFloat(item.last).toFixed(2))
        count ++
    })
    setTables(tables)
    setPrices(priceData)
    setColor(colors)
}