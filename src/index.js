var apiKey = {
  key: '734c60ec-f84c-405b-9e81-7ac20d23c21e'
}

fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=${apiKey.key}`)
  .then((response) => {
    if(!response.ok) {
      throw new Error(`Erro ao executar a requisição, status ${response.status}`);
    }
    return response.json();
  })
  .then((api) => {
    console.log(api)
    let texto = "";

    for (let i = 0; i < 10; i++){
      texto = texto + `
        <div class="media">
          <img src="coin.png" class="align-self-center mr-3" alt="coin" width="40" height="40">
          <div class="media-body">
            <h5 class="mt-2">${api.data[i].name}</h5>
            <p>${api.data[i].symbol} <br/>${(api.data[i].first_historical_data)}</p> 
          </div>
        </div>
      `;

      document.getElementById("coins").innerHTML = texto;

    }
  })
  .catch((error) => {
    console.error(error.message)
  })