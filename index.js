const express = require('express');
const app = express();



const PORT = 5000;


console.log('Hello, World!');


// today we will study about MVC clean architectutre and publish to github

// at first, we will learn about userside...

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);

});
app.get("/",(req,res)=>{
    res.send("Aashish Guragain");
})