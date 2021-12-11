// Simple node.js server for deployment

const app = require("express")();
const path = require("path");

//static
app.use('/static', express.static(path.join(__dirname, 'public')))

//all routes
app.get("/*",(req,res) => {
	res.sendFile(path.join(__dirname, './public', 'index.html'));
})


//listen on production port
app.listen(process.env.PORT || 3000,() => {console.log("Server active")})