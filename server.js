// Simple node.js server for deployment

const app = require("express")();
const path = require("path");

app.get("/*",(req,res) => {
	res.sendFile(path.join(__dirname, './public', 'index.html'));
})

app.listen(process.env.PORT || 3000,() => {console.log("Server active")})