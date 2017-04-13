express = require("express");
path    = require("path");
app     = express();

app.use(express.static('dist'));

app.get("/", function(request, response){
    response.sendFile(path.join(__dirname+"/dist/view/index.html"));
});
app.get("/flat-card", function(request, response){
    response.sendFile(path.join(__dirname+"/dist/view/flat-card.html"));
});

app.listen('7000',function(){
  console.log("server is running...");
});
