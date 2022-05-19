const dice = document.querySelector('.dice')
dice.addEventListener('click', roll)
function roll() {
    const quote = fetch('https://api.adviceslip.com/advice')
    quote
    .then( response => response.json() )
    .then( data => {
        console.log(data.slip.id)
        document.querySelector('p').innerText = data.slip.advice
        document.querySelector('h1').innerText = `ADVICE   #${data.slip.id}`
    } )
    .catch( err => console.log( `error: ${err}` ) )
}