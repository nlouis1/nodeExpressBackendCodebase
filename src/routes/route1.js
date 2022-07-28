import express from 'express'
const route1 =express.Router();
route1.get("/entry2",(req,res)=>{
res.send("entry number 2");
});
export default route1;