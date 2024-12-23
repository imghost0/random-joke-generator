const generateJokeBtn=document.getElementById('generate-joke-btn')
const jokeDiv=document.getElementById('joke')

const apiUrl='https://v2.jokeapi.dev/joke/Any';

async function fetchJokeAPi(){
    try{
        const response=await fetch(apiUrl)
        if(!response.ok){
            throw new Error('404')
        }
        const data=await response.json()
        if(data.type==='single'){
            jokeDiv.innerHTML=`${data.joke}`
        }
        else{
            jokeDiv.innerHTML=`${data.setup} - ${data.delivery}`
        }
    }
    catch{
        jokeDiv.innerHTML=`ERROR:${error.message}`
    }


}
    
generateJokeBtn.addEventListener('click',fetchJokeAPi)
