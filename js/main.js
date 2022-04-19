//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  
  fetch('https://palabras-aleatorias-public-api.herokuapp.com/random')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.body['Word'])
        let definition = data.body['DefinitionMD'].split("'**")
        let shortDefinition = definition[0]
        let noDiccionario = shortDefinition.split("Diccionario de la lengua")
        let word = data.body['Word'].toUpperCase()
        console.log(definition)
        document.querySelector('h2').innerText = word
        if(shortDefinition.includes('Diccionario')){
          document.querySelector('h3').innerHTML = noDiccionario[0]
        } else {
          document.querySelector('h3').innerHTML = shortDefinition
        }
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}