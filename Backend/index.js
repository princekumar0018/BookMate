const express=require('express');
const app=express();
app.use(cors());

app.use('/',(req,res)=>{
    res.send("Site Is ");
});

const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})