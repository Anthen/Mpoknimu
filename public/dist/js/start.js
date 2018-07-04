const mongoose=require("mongoose"),chalk=require("chalk"),log=console.log,error=chalk.bold.red;require("dotenv").config({path:"variables.env"}),mongoose.Promise=global.Promise;let mongodbUri=mongoose.connect("mongodb://YOUR MONGODB URL",{useMongoClient:!0,poolSize:3,reconnectTries:240,reconnectInterval:900,autoReconnect:!0,noDelay:!0,loggerLevel:"error"});const db=mongoose.connection;db.on("error",console.error.bind(console,"MongoDB connection error:")),db.once("open",function(){log(chalk.hex("#FFEB3B")("Did you connect to the database without errors"),chalk.greenBright("ðŸ˜"))}),process.on("unhandledRejection",(e,o)=>{console.log("Unhandled Rejection at: Promise",o,"reason:",e)});const app=require("./app");app.set("port",process.env.PORT||9e3);const server=app.listen(app.get("port"),()=>{log(chalk.underline.hex("#DEADED")("Server is listening music on port:"),chalk.hex("#4CAF50")(`ðŸŒ  PORT â†’ ${server.address().port} ðŸŽ¶`))});