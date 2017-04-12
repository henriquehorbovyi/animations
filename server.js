express = require("express");
path    = require("path");
app     = express();

app.use(express.static(__dirname + '/dist'));

app.get("/", function(request, response){
    res.sendFile(path.join(__dirname, 'index.html'))
});

app.listen('7000',function(){
  console.log("server is running...");
});
