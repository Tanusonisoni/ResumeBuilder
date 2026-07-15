import app from "./app.js";
import connectDb from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 5000;

async function startServer() {
    try {
        await connectDb();
        
        app.listen(PORT, () => {
            console.log(`🚀 Server is perfectly running on port ${PORT}`);
        });
    } catch (error) {
        console.log("❌ Server starting error: ", error.message);
    }
}

startServer();
