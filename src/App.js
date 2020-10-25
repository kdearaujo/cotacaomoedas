import React, {useState, useEffect} from 'react';
import './App.css';

export default function App(){

  useEffect(() => {
    document.title = 'Retorna moedas selecionadas'
  } ,[])

  const [moeda, setMoeda] = useState([]);
  const [dados, setDados] = useState([]);
  

  async function obterMoeda()
  { 
    if (moeda=="") {
      alert("SELECIONE UMA MOEDA!!");  
    }
    else{
        let url = `https://economia.awesomeapi.com.br/json/all/${moeda}`;
        await fetch(url)
        .then(response => response.json())
        .then(data => {
         //console.log(data);
         setDados(data[moeda]);
        })
        .catch(function (error) {
          console.error(`Houve um erro: ${error}`)
        });
      }
  }

  return(
    <div className="principal">
      <h1>Cotação de moedas</h1>
      <br></br>
      <label>Escolha a moeda:</label>
      <select id='moedas' onChange={e => setMoeda(e.target.value)}>
      <option id='nulo' value=" ">selecione..</option>
        <option value="ARS">Peso Argentino</option>
        <option value="AUD">Dólar Australiano</option>
        <option value="BTC">Bitcoin</option>
        <option value="CAD">Dólar Canadense</option>
        <option value="CHF">Franco Suíço</option>
        <option value="CNY">Yuan Chinês</option>
        <option value="ETH">Ethereum</option>
        <option value="EUR">Euro</option>
        <option value="GBP">Libra Esterlina</option>
        <option value="ILS">Novo Shekel Israelense</option>
        <option value="JPY">Iene Japonês</option>
        <option value="LTC">Litecoin</option>
        <option value="USD">Dólar Americano</option>
        <option value="USDT">Dólar Turismo</option>
        <option value="XRP">Ripple</option>
      </select>
      <button type='button'  onClick={obterMoeda}>
        Obter moeda
      </button>
      <p>Nome:<br></br> {dados.name}</p>
      <br></br>
      <p>Valor Para Venda:<br></br>{dados.ask}R$</p>
      <br></br>
      <p>Valor Para Compra:<br></br>{dados.bid}R$</p>
      <br></br>
      <p>Valor em Alta:<br></br>{dados.high}R$</p>
      <br></br>
      <p>Valor em Baixa:<br></br>{dados.low}R$</p>   
  </div>

  )
}
