import express from 'express';
import morgan from 'morgan';
import compression from 'compression';
import { onError,onSuccess } from './utils/response';
import routes from './routes';
const app = express();
app.use(morgan("combined"))
app.use(compression());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const Port =6000;
app.get("/",(req,res)=>{
    res.send("welcome to our backend api");
})
app.use("/api",routes),
app.listen(Port,()=>{
    console.log(`app is running on port ${Port}`);
})