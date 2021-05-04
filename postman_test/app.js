// const req = new XMLHttpRequest();

// req.onload = function () {
//     console.log('ALL DONE WITH REQUEST!!!');
//     const data = JSON.parse(this.responseText);
//     console.log(data.ticker.price);
// }

// req.onerror = function () {
//     console.log('ERROR');
//     console.log(this);
// }

// req.open('get', 'https://api.cryptonator.com/api/ticker/btc-usd')
// req.send()

// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log("response", res);
//         return res.json()
//     })
//     .then(data => {
//         console.log("data parsed...", data);
//         console.log(data.ticker.price);
//     })
//     .catch(e => {
//         console.log("oh no error", e);
//     })

// const fetchBitcoinPrice = async () => {
//     try {
//         const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//         const data = await res.json();
//         console.log(data.ticker.price);
//     } catch (e) {
//         console.log('something went wrong');
//     }
// }

// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log(res.data.ticker.price);
//     })
//     .catch(err => {
//         console.log("error!", err);
//     })

const fetchBitcoinPrice = async () => {
    try {
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
        console.log(res.data.ticker.price);
    } catch (e) {
        console.log("error!", e);
    }
}