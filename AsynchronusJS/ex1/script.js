// id call cheyyali 
// danni oka ele lo store cheyyali

// const request = fetch('document.txt')
// console.log('Making the request:', request) // Promise is pending

// const response = request.then(response => response.text())
// console.log('Treating the response', response) // Promise is pending

// response.then(text => {
//   console.log(text)
// })
let buttonJs = document.body.querySelector('button').addEventListener('click',buttonFunction);

 let ulJs = document.createElement('ul')

function buttonFunction(){
    fetch('becode.json').then(response => response.json())
    .then(json => {
        let jsonPage = json
        console.log(json)
        let ulJs = document.createElement('ul')
        jsonPage.forEach(element => {
            let liJs = document.createElement('li')
            liJs.innerHTML = element;
            ulJs.appendChild(liJs);
            console.log(liJs)
        });
        document.body.appendChild(ulJs) 
    });
    
}