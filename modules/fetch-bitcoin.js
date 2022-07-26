export default function fetchBitcoin(){
    
}

fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(res => {
        const btcPreco = document.querySelector('.btc-preco')
        btcPreco.innerText = (1000 / res.BRL.buy).toFixed(4)
    })
    .catch(error => console.log(`%c ${error} ` ,'color:hsl(0, 100%, 90%);background-color:hsl(0, 100%, 50%);'));