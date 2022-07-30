function request (){
    return fetch('https://api.themoviedb.org/3/discover/movie?api_key=103186a9f4ef77e1f666cdd93a1fa70a&?page=1&sort_by=popularity.desc', {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json;charset=utf-8'
        }

    })
    
}

(async()=>{
    const teste = await request()
    const t2 = await teste.json()
    console.log(t2)
}) ()

