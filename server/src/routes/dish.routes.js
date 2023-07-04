import { Router } from "express";
import { getAllDishes, getDishById } from "../controllers/dish.controller.js";

const dishRoutes = Router();

dishRoutes.get("/", getAllDishes);

dishRoutes.get("/:id", getDishById);

export default dishRoutes;
