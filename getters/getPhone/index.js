const getPhone = ($) => {
  const data = $('body').html().split('>Call ')[1]
  return data 
        ? data.split('</div>')[0]
        : 'Nao Encontrado'
}

module.exports = getPhone