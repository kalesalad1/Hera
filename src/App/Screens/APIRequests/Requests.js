const fetch = require('node-fetch');
const keys = require('../../../../../../dating_app/back-end/flaskAPI/keys.json')

API_KEY = keys['API_Key']

class Request{
    constructor(url){
        this.url = url
        this.data = {}
    }

    async GetUser(string){
        await fetch(this.url + '/' + string + '/' + API_KEY, {
            method: "GET",
            mode: "no-cors",
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }})
            .then(response => response.json())
            .then(data => {
                this.data = data
            });
        return this.data
    }

    async GetUsers(){
        await fetch(this.url + "s/" + API_KEY, {method: "GET"})
            .then(response => response.json())
            .then(data => {
                this.data = data
            });
        return this.data
    }

    async PostUser(data = {}){
        const rawResponse = await fetch(this.url + "s/" + API_KEY, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data)
        });
        const content = await rawResponse.json();
        console.log(content);
    }
}

// var Req = new Request("http://127.0.0.1:5000/api/user");
// var test = Req.GetUser('email=Finish@gmail.com');
// test.then(data => {
//     console.log(data)
// })

module.exports = Request;
