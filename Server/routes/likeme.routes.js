import { Router } from "express";
import { likeMeController } from "../controllers/likeme.controller.js";

const likeMeRouter = Router();

likeMeRouter.get("/", likeMeController.allPosts);
likeMeRouter.post("/posts", likeMeController.addPost);
likeMeRouter.delete("/posts/:id", likeMeController.erasePost);
likeMeRouter.put("/posts/:id", likeMeController.likePost);

export default likeMeRouter;
