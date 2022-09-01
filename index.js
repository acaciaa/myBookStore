const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51LaJb3SGGiTZZHJfo02hlAuBFxzVzfPvLshPgrULjPLFwVq5xspdDnekRM1xooEjfpf9y4c0e8P2wlsMgv2RhCIP00hEzqcY6N');

const PORT=5000;
//API

//App config
const app = express();

//middleware

app.use(cors({origin:true})); 
app.use(express.json());

//api routes
app.post("/payments/create", async (req, res) => {
  const total = req.body.amount;
 
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//heroku configuration
if(process.env.NODE_ENV="production"){
    app.use(express.static("frontend/build"))
  
    const path=require("path")
    app.get("*",(req,res)=>{
       res.sendFile(path.resolve(__dirname,"frontend","build","index.html"))
    })
}


//listen to a port 
app.listen(process.env.PORT || 3000,()=>{
  console.log(`app running on port:${PORT}`)
})


