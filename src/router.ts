import { Router, Request, Response } from "express";
import multer from "multer";
import { HomeController } from "./controller/home.controller";
import multerConfig from "./config/multer";

const router = Router();

const homeController = new HomeController();

router.get('/ping', (req: Request, res: Response) => {
   return res.json({ pong: true });
})

router.get('/', (req: Request, res: Response) => {
   return res.json({ data: req.query });
})

router.post('/posts', multerConfig.single('file'), homeController.handle)

export default router;