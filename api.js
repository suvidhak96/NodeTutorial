const http=require('http')
const data=require('./data')
http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'application/json'})
    res.write(JSON.stringify(data));
    res.end();
}).listen(4500);



// const express = require('express');
// const app = express();

// // Sample array of jokes
// const jokes = [
//     "Why don't scientists trust atoms? Because they make up everything!",
//     "What do you call fake spaghetti? An impasta!",
//     "Why did the scarecrow win an award? Because he was outstanding in his field!",
//     "Why don't scientists trust atoms? Because they make up everything!",
//     "What do you call fake spaghetti? An impasta!",
//     "Why did the scarecrow win an award? Because he was outstanding in his field!",

//     "Why don't scientists trust atoms? Because they make up everything!",
//     "What do you call fake spaghetti? An impasta!",
//     "Why did the scarecrow win an award? Because he was outstanding in his field!",

//     "Why don't scientists trust atoms? Because they make up everything!",
//     "What do you call fake spaghetti? An impasta!",
//     "Why did the scarecrow win an award? Because he was outstanding in his field!",

// ];

// // Route to get a random joke
// app.get('/api/joke/', (req, res) => {
//     const randomIndex = Math.floor(Math.random() * jokes.length);

//     console.log(randomIndex);
//     const randomJoke = jokes[randomIndex];
//     res.json(
//              { suvi_cha_Panchat_joke: randomJoke }
//         );
// });

// // Set the server to listen on port 3000
// const PORT = process.env.PORT || 3500;
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
