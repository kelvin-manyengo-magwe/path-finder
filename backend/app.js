
//aquiring the express from the package
const express= require("express");


//requiring the UserDetails from ./
require("./UserDetails");

//initializing the express
const app= express();

//adding middleware to parse JSON data
app.use(express.json());


//aquire the mongooose package
const mongoose= require("mongoose");

const mongoUrl= "mongodb+srv://kelvinmullar5:admin@cluster1.vybkmpe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";
const port= 5001;

  process.on('unhandledRejection', (reason, promise) => {
    console.error("Unhandled Promise Rejection")
  } );

//connecting to the mongodb. mongoose object has only one method
mongoose.connect(mongoUrl).then(() => {
  console.log("Mongodb Database connected.");  //promise return be the connect through the callback
}).catch(e => {
    console.error(e); //catching the error for promise returned
});

//listening to the server port by listen function as express object
//pass the callback function to handle async response without return passed as argument
app.listen(port, () => {
  console.log(`Node Js server Started at server http:://localhost:${port}`);
});


const User= mongoose.model('UserInfo');


//post request for register
app.post('/register', async (req, res) => {
    const { name, email, password }= req.body;

    const oldUser= await User.findOne({ email: email });

    if(oldUser) { //if old user if found it return something then it will not go forward
        return res.send({data: "User Already Exists."});
    }

    try {
            await User.create({ //without await the user return the promise and is not being handled
              name: name,
              email: email,
              password: password,
            });

            res.send({status: "Ok",
                      data: "User Successuly created." });
    } catch(error) {
        res.send({status: "Registration error",
                  data: error });
    }
});

//the api methods getting response through /
app.get('/', (req, res) => {
    res.send({status: "Started"});
});
