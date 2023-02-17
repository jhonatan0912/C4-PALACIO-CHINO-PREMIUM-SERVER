import express from "express";
import productsRoutes from "./routes/products.routes.js";
import promocionesRoutes from "./routes/promociones.routes.js";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/products', productsRoutes);

app.use('/api/promociones', promocionesRoutes)

export default app;