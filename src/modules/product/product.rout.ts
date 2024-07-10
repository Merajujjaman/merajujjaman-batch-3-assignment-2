import  express, { Request, Response }  from 'express';


const router = express.Router()

router.post('/', (req: Request, res: Response) => {
    res.send("get gata")
    console.log(req.body);
  })

export const ProductRoutes = router