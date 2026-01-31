import express from "express"
import dotenv from "dotenv"
dotenv.config();

const app = express();
const PORT = process.env.PORT||3330;

app.use("/user",userRoutes)
app.use("/vehicles",vehicleRoutes)
app.use("/trips",tripRoutes)
app.use("analytics", analyticsRoutes)


app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})
