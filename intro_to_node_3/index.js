import axios from 'axios'
axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=7e3f6dcf')
.then((response)=>{
    console.log(response.data)
})

// Here we are chaining a .then() 