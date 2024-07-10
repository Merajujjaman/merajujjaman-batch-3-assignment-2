import express, { Request, Response } from "express";
import { ProductRoutes } from "./modules/product/product.rout";
const app = express()
app.use(express.json())

app.use("/api/products", ProductRoutes )

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })