const axios = require('axios');

function traerNoticias(filtros){
    return new Promise ((result, reject) => {
        axios.get('https://newsapi.org/v2/top-headlines?' +
        'q=' + filtros +
        '&apiKey=' + process.env.API_KEY)
        .then(function (response) {
            // handle success
            console.log('success')
            result(response.data.articles)
        })
        .catch(function (error) {
            console.log('error')
            // handle error
            console.log(error);
            reject('Error')
        });
    })
}

module.exports = {  
    traerNoticias,
 }