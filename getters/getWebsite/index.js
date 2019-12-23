const getWebsite = ($) => {
  const data = $('body').html().split('>http')[1]
  return data 
      ? data.split('</div>')[0].split('://')[1]
      : 'Nao Encontrado'
}

module.exports = getWebsite