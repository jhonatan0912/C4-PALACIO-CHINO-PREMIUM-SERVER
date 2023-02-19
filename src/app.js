import express from "express";
import productsRoutes from "./routes/products.routes.js";
import promocionesRoutes from "./routes/promociones.routes.js";
import authRoutes from "./routes/auth.routes.js";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.use(cors());

app.use(morgan("combined"));

app.use(express.json());

app.use('/api/products', productsRoutes);

app.use('/api/promociones', promocionesRoutes)

app.use('/api/auth', authRoutes);

export default app;