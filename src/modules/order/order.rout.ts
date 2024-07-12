import express, { Request, Response } from "express"

const router = express.Router()

router.get("/", (req: Request, res: Response) => {
    res.send('Hello from Order rout')
  })


export const orderRoutes = router