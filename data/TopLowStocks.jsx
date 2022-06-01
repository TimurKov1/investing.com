import axios from 'axios'

export async function fetchTopLowStocksRating(setTables, setPrices, setColor, prices, isMobile) {
    const encodedParamsUSA = new URLSearchParams();
    encodedParamsUSA.append("n_results", "600");
    encodedParamsUSA.append("country", "United States");
    const optionsUSA = {
      method: 'POST',
      url: 'https://investing4.p.rapidapi.com/stocks/overview',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Host': 'investing4.p.rapidapi.com',
        'X-RapidAPI-Key': '7279bc897amsh20fd17451c09853p11fa92jsncd98e6fc3381'
      },
      data: encodedParamsUSA
    };
    const responceUSA = await axios.request(optionsUSA)
    const encodedParamsRussia = new URLSearchParams();


    encodedParamsRussia.append("n_results", "242");
    encodedParamsRussia.append("country", "Russia");
    const optionsRussia = {
      method: 'POST',
      url: 'https://investing4.p.rapidapi.com/stocks/overview',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Host': 'investing4.p.rapidapi.com',
        'X-RapidAPI-Key': '7279bc897amsh20fd17451c09853p11fa92jsncd98e6fc3381'
      },
      data: encodedParamsRussia
    };
    const responceRussia = await axios.request(optionsRussia)
    const tables = []
    const priceData = []
    const colors = []
    const responce = [...responceUSA.data.data, ...responceRussia.data.data].sort(function (a, b) {
        if (parseFloat(a.change_percentage) > parseFloat(b.change_percentage)) {
            return 1;
        }
        if (parseFloat(a.change_percentage) < parseFloat(b.change_percentage)) {
            return -1;
        }
        return 0;
    })
    for (var i = 0; i < 5; i++) {
        var result = responce[i]
        const itemData = [
            `${result.name}`,
            result.currency == 'USD' ? `${parseFloat(result.last).toFixed(2)} $` : `${parseFloat(result.last).toFixed(2)} ₽`,
            `${result.change_percentage}`
        ]
        tables.push(itemData)
    }
    setTables(tables)
    setPrices(priceData)
    setColor(colors)
}