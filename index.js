
const rp = require('request-promise')
const cheerio = require('cheerio')
const { getPhone, getWebsite } = require('./getters')

const urlBusca = 'https://www.facebook.com/pg/rampersoftware/about/';

const options = {
  uri: urlBusca,
  headers: {
    'User-Agent': 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36'
  },
  transform: (body) =>  cheerio.load(body)
}

const request = rp(options)
  .then($ => {
    console.log("Buscando...");
    const phone = getPhone($)
    const site = getWebsite($)
    console.log({ phone, site })
  })
  .catch((err) => console.log(err))