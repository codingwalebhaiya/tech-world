import connectDB from "./db/index.js";
import dotenv from "dotenv";
import app from "./app.js"; 

dotenv.config();  

connectDB()
  .then(() => {
    app.on("error", (err) => {
      console.log("Error", err);
      throw err
    });
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log(`Server is running at port : ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);  
  }); 
  