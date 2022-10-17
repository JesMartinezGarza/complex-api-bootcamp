//Goal: Use data returned from one api to make a request to another api and display the data returned

//https://api.api-ninjas.com/v1/randomword
//https://api.api-ninjas.com/v1/thesaurus?word=


document.querySelector('button').addEventListener('click', getWord)

function getWord(){
    fetch(`https://api.api-ninjas.com/v1/randomword`,{
        method: 'GET', headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Api-Key': 'LICIk+Uj0UlnuHxZohxiEw==ASwnzAaOvuO51LMH'
        }
    })
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.word)
        let a = data.word

        fetch(`https://api.api-ninjas.com/v1/thesaurus?word=${a}`,{
        method: 'GET', headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Api-Key': 'LICIk+Uj0UlnuHxZohxiEw==ASwnzAaOvuO51LMH'
        }
    })
    .then(res => res.json()) // parse response as JSON
    .then(synonym => {
      console.log(synonym)

        document.querySelector('h3').innerText ='Synonym: ' + synonym.synonyms[0]
    })

        document.querySelector('h2').innerText ='Word: ' + data.word
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}