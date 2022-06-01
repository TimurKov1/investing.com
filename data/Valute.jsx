import { valuteList } from './Data'
import axios from 'axios'

export async function fetchValuteRating(setTables, setPrices, setColor, prices, isMobile) {
    const encodedParams = new URLSearchParams();
    encodedParams.append("name", "RUB");
    encodedParams.append("n_results", "10");
    
    const options = {
        method: 'POST',
        url: 'https://investing4.p.rapidapi.com/currencies/overview',
        headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Host': 'investing4.p.rapidapi.com',
        'X-RapidAPI-Key': '7279bc897amsh20fd17451c09853p11fa92jsncd98e6fc3381'
        },
        data: encodedParams
    };
    const responce = await axios.request(options)
    const serverData = responce.data.data.filter(item => valuteList.indexOf(item.symbol.slice(0, 3)) != -1)
    const tables = []
    const priceData = []
    const colors = []
    var count = 0
    serverData.forEach(item => {
        if (prices) {
            if (parseFloat(item.bid).toFixed(2) > prices[count]) {
                colors.push('#23C14F')
            }
            if (parseFloat(item.bid).toFixed(2) < prices[count]) {
                colors.push('#FF4545')
            }
            if (parseFloat(item.bid).toFixed(2) == prices[count]) {
                colors.push('#433532')
            }
        }
        else {
            colors.push('#433532')
        }
        const itemData = isMobile ? [
            `${item.symbol}`, 
            `${parseFloat(item.bid).toFixed(2)} ₽`,
            `${parseFloat(item.change).toFixed(2)} ₽`
        ] : [
            `${item.symbol}`, 
            `${parseFloat(item.bid).toFixed(2)} ₽`,
            `${parseFloat(item.change).toFixed(2)} ₽`,
            `${parseFloat(item.change_percentage)}`.includes('-') ? `${parseFloat(item.change_percentage).toFixed(2)} %` : `+${parseFloat(item.change_percentage).toFixed(2)} %`
        ]
        tables.push(itemData)
        priceData.push(parseFloat(item.bid).toFixed(2))
        count ++
    })
    setTables(tables)
    setPrices(priceData)
    setColor(colors)
}

  
//     let valuteData = [] 
//     list.forEach(item => {
//       valuteData.push(serverData.Valute[item])
//     })
//     const tables = []
//     if (isMobile) {
//       valuteData.forEach(item => {
//         tables.push([
//           `${item.CharCode}/RUB`, `${item.Value.toFixed(2)} ₽`,

//           `${item.Value > item.Previous ? '+' : '-'}
//           ${item.Value < item.Previous ? 
//           `${(item.Value - item.Previous).toFixed(2)}`.slice(1) : 
//           `${(item.Value - item.Previous).toFixed(2)}`} ₽`
//         ])
//       })
//     } else {
//       valuteData.forEach(item => {
//         const change = Math.abs(item.Value - item.Previous)
//         tables.push(
//           [
//             `${item.CharCode}/RUB`, `${item.Value.toFixed(2)} ₽`,

//             `${item.Value > item.Previous ? '+' : '-'}
//             ${item.Value < item.Previous ? 
//             `${(item.Value - item.Previous).toFixed(2)}`.slice(1) : 
//             `${(item.Value - item.Previous).toFixed(2)}`} ₽`, 

//             `${item.Value > item.Previous ? '+' : '-'}
//             ${(change / item.Previous * 100).toFixed(2)} %` ,

//               liveTime ?
//             `${moment(serverData.Date).format('h:mm:ss')}` : ""
//           ]
//         )
//       })
//     }
//     setValuteServerData(tables)
//     setIsValuteDataLoading(false)
// }