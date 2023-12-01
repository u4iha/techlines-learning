import dotenv from "dotenv";
import connectToDatabase from "./database.js";
import Express from "express";

//Routes
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
connectToDatabase();
const app = Express();

app.use(Express.json());

const port = process.env.PORT || 5000;

app.use("/api/products", productRoutes);

app.listen(port, () => {
	console.log(`server runs on port ${port}`);
});
