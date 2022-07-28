function request (){
    return fetch('https://api.themoviedb.org/3/movie/550?api_key=103186a9f4ef77e1f666cdd93a1fa70a', {
        method: 'GET',

    })
    .then(response =>{
        console.log(response.json())
        
    })
}

request()