
//aquiring the express from the package
const express= require("express");
//initializing the express
const app= express();

//aquire the mongooose package
const mongoose= require("mongoose");

const mongoUrl= "mongodb+srv://kelvinmullar5:admin@cluster1.vybkmpe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";
const port= 5001;

//connecting to the mongodb. mongoose object has only one method
mongoose.connect(mongoUrl).then(() => {
  console.log("Mongodb Database connected.");  //promise return be the connect through the callback
}).catch((e) => {
    console.log(e); //catching the error for promise returned
});

//listening to the server port by listen function as express object
//pass the callback function to handle async response without return passed as argument
app.listen(port, () => {
  console.log(`Node Js server Started at server http:://localhost:${port}`);
});


//the api methods getting response through /
app.get('/', (req, res) => {
    res.send({status: "Started"});
});
