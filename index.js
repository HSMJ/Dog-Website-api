//Initializing express package
let express = require("express")
//Creating an express server in the variable app
let app = express();

//Callback function that sets the port for the server to listen on
app.listen(3000, () => {
 console.log("Server running on port 3000");
});