const express = require('express');
const session = require('express-session'); 
const cookies = require("cookie-parser");

const app = express();


const dotenv = require("dotenv").config()
const path = require('path');

const methodOverride = require("method-override");
const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware");
const admLoggedMiddleware = require("./middlewares/admLoggedMiddleware");



const productRoutes = require("./routes/productRoutes")
const usuarioRoutes = require("./routes/usuarioRoutes")
const administradorRoutes = require("./routes/administradorRoutes")
const apiUsersRoutes = require('./routes/apis/usuarioRoutes');
const productsApiRoutes = require('./routes/apis/productRoutes');

// para usar req.body
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));

// peticiones put, delete
app.use(methodOverride ("_method")); 

app.use(session({
    secret: "Shh, It's a Secret",
    resave: false,
    saveUninitialized: false
}));

//uso de middlewares
app.use(cookies());
app.use(userLoggedMiddleware);
app.use(admLoggedMiddleware);


app.use("/", productRoutes);
app.use("/", usuarioRoutes);
app.use("/", administradorRoutes);
app.use("/api/users", apiUsersRoutes);
app.use("/api/products", productsApiRoutes);

app.set("view engine","ejs")



app.listen(process.env.PORT|| 3000, ()=>{
    console.log("Servidor corriendo en " + process.env.PORT)
})