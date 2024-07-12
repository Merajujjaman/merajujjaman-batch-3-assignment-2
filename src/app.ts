import express, { Request, Response } from "express";
import { ProductRoutes } from "./modules/product/product.rout";
import { orderRoutes } from "./modules/order/order.rout";
const app = express();
app.use(express.json());

app.use("/api/products", ProductRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

//not found rout:
app.all("*", (req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    message: "Route not found",
  });
});

export default app;

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
