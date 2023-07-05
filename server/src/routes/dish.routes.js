import { Router } from "express";
import { getAllDishes, getAllMenu, getDishById } from "../controllers/dish.controller.js";

const dishRoutes = Router();

dishRoutes.get("/", getAllDishes);

dishRoutes.get("/:id", getDishById);
dishRoutes.get("/test/test", getAllMenu);

export default dishRoutes;
