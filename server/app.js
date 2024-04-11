
const express = require("express");	// Deklarace Express JS balíčku

let app = express(); // Deklarace nové Express JS aplikace/serveru

const mongoose = require('mongoose'); // Import metod a syntaxe knihovny Mongoose

require("dotenv").config(); // Konfigurační soubor .env

const cors = require("cors"); // Deklarace cors

const port = process.env.APP_PORT;

const shoppingListRouter = require("./controller/shopping-list-controller"); // Deklarace Routeru 

const morgan = require('morgan'); // Import balíčku Morgan pro logování volání do konzole  

/******************************************************************************************************/

if (process.env.NODE_ENV === "DEVELOPMENT"){
    app.use(morgan('dev')); // Deklarace middlewaru Morgan pro log volání do konzole
}

app.use(express.json()); // Deklarace middlewaru pro použití převodníku body z requestu na JSON

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/shoppingList", shoppingListRouter);

/******************************************************************************************************/

const DB_CONN = process.env.DB_CONN.replace("<PASSWORD>", process.env.DB_PASSWORD); // Vyplnění hesla

// Připojení do databáze
mongoose.connect(DB_CONN).then(() => {
    //console.log(con.connection);
    console.log("Database successfully connected!");
}); // Připojení databáze přes knihovnu Mongoose

/*********************************************************************************/

app.get("/", (request, response) => {
    response.status(200).json({
        message: "Testing endpoint! [app.js]",
        method: request.method
    });
})

/******************************************************************************************/

// Specifikace portu, kde server spustím
app.listen(port, () => {
    console.log(`Server is started on port ${port}!`);
})

/******************************************************************************************/

