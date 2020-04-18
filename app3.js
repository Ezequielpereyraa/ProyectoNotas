//Variables
const listaTweet = document.querySelector('#lista-tweet');
const formulario = document.querySelector('#formulario');
//Evenlistener
const funcGeneral = () =>{
    formulario.addEventListener('submit', agregarTweet);
    // Borrar 
    listaTweet.addEventListener('click', borrarTweet)
    // Contenido Cargado
    document.addEventListener('DOMContentLoaded', localStorageListo);
};

// Funciones 
const agregarTweet = (e)=>{
    e.preventDefault();
    if(tweet.value != ''){
        const tweet = document.querySelector('#tweet').value;
        const li = document.createElement('li');
        li.className = 'pt-4'
        li.innerHTML = tweet
        listaTweet.append(li);
        const buttonBorrar = document.createElement('button');
        buttonBorrar.className = 'borrar-tweet float-right';
        buttonBorrar.innerText = 'x'
        li.append(buttonBorrar);
        agregarLocalStorage(tweet)
    } else{
       alert('Escribir Nota')`
    }
  
    formulario.reset()
   
}
// borrar el tweet
function borrarTweet(e) {
    e.preventDefault()
    //console.log('diste click en la lista')
    if(e.target.className){
        e.target.parentElement.remove()
        borrarTweetsLocalStorage(e.target.parentElement.innerText)
        //console.log(e.target.parentElement.innerText)
    } 
 
}
const borrarTweetsLocalStorage = (tweet)=>{
    let tweets;
    let tweetBorrado;
    // así se obtiene el tweet a borrar y cortado 
    tweetBorrado = tweet.substring(0, tweet.length - 1)
 
    tweets = obtenerTweetsLocalStorage(); 
 
    tweets.forEach(function(tweet, index){
        if(tweetBorrado === tweet) {
            tweets.splice(index, 1)
        }
    })
console.log(tweets);

}


   
// Agregar el tweets al LocalStorage
const agregarLocalStorage = (tweet)=>{
   let tweets;
   tweets = obtenerLocalStorage();
   //  añadir el tweet
   tweets.push(tweet);
   // Arreglo para el localstorage
   localStorage.setItem('tweets',JSON.stringify(tweets))
}
// Obtenener tweets LocalStorage 
const obtenerLocalStorage = ()=>{
    let tweets
    // Revisar si hay algo en el local 
    if(localStorage.getItem('tweets') === null){
        tweets = []
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}
// Cargar los tweets del LocalStorage en el dom 
const localStorageListo = ()=>{
    let tweets;
    tweets = obtenerLocalStorage();
    tweets.forEach(tweet => {
    const li = document.createElement('li');
    li.className = 'pt-4 w-50'
    li.innerHTML = tweet
    listaTweet.append(li);
    const buttonBorrar = document.createElement('button');
    buttonBorrar.className = 'borrar-tweet float-right';
    buttonBorrar.innerText = 'x'
    li.append(buttonBorrar);
   });
}


 
funcGeneral()
