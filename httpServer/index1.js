const http=require('http');
const fs=require('fs')
debugger;
const server=http.createServer((req,res)=>{
    // console.log(req.url);
const data=fs.readFileSync(`${__dirname}/jsonNodejs/empdata.json`,'utf-8');
const objdata=JSON.parse(data)
    if(req.url=='/'){
        res.end('server created')
    }else if(req.url=='/about'){
        res.end("about us")
    }else if(req.url=='/userapi'){
        res.writeHead(200,{"content-type":"application/json"})
        res.end(objdata[0].fname)
    }else{
        res.writeHead(400,{'content-type':'text/html'})
        res.end('404 page not found')
    }
})
server.listen(4600,'127.0.0.1',()=>{
    console.log('listening server 4600');
})