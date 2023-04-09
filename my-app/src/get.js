const fetch = require("node-fetch");

const params = {
    api_key: 'MPGogOa9dZbgva6VN9LCcgdovtIMdFIDk6Uv4hlO',
    query: 'mango',
    dataType: ["Survey (FNDDS)"],
    pagesize: 1,
}

const api_url = 
    `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${encodeURIComponent(params.api_key)}&query=${encodeURIComponent(params.query)}&dataType=${encodeURIComponent(params.dataType)}&pagesize=${encodeURIComponent(params.pagesize)}`

function getData(){
    return fetch(api_url).then(response => response.json());
}

getData().then(data => console.log(data.foods[0].foodNutrients[3]))


