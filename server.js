const { response } = require('express');
const express = require('express');
const app = express();
const port = 9090;

app.get('/',(req, res)=> {
res.send('Hello, you are getting response from my server')

})



app.listen(port,()=>{
    console.log('I am litening');
})