import express from 'express'
const route2 =express.Router();
route2.get("/entry2",(req,res)=>{
res.send("entry number 2");
});
export default route2;