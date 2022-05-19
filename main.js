const dice = document.querySelector('.dice')
dice.addEventListener('click', roll)
function roll() {
    const quote = fetch('https://api.adviceslip.com/advice')
    quote
    .then( response => response.json() )
    .then( data => {
        console.log(data)
        document.querySelector('p').textContent = ''
        document.querySelector('h4').textContent = ''
        document.querySelector('p').textContent = data.slip.advice
        document.querySelector('h4').textContent = `ADVICE   # ${data.slip.id}`
    } )
    .catch( err => console.log( `error: ${err}` ) )
}