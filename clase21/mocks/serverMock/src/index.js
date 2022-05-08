import express, {json, urlencoded} from "express";
import { userRoute  } from "./routes/user.routes";
const app = express()
app.use(json())
app.use(urlencoded({extended:true}))

app.use('api/usuarios',new userRoute( ))

const PORT = 3001;
app.listen(PORT,()=>{
    console.log(`Corriendo servidor 🔥 puerto localhost:${PORT}`);
})