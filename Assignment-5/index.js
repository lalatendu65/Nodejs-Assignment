const http=require("http");
const fs=require("fs");
const server=http.createServer((req,res)=>{
    
    if(req.url=="/"){
        
        res.end("i am on the home page")
    }
    else if(req.url=="/welcome"){
        res.writeHead(200,{"content-type":"text/plain"})
        res.end("Welcome to Dominos!")
    }
    else if(req.url=="/contact"){
        //acsyno version
         fs.readFile(`${__dirname}/userapi/user.json`,"utf-8",(err,data)=>{
            res.writeHead(200,{"content-type":"application/json"})
            
         

           res.end(data);
        })
       
    }
    else{
        res.writeHead(404,{"content-type":"text/html"});
        res.end("<h1> 404 errors</h1>")
    }
    
});
server.listen(8081.,"127.0.0.1",()=>{
    console.log("listen port 8081")
});
