import { Router } from "express";
import { createOrder, getClientOrders, getOrderById } from "../controllers/order.controller.js";

const orderRoutes = Router();

orderRoutes.post("/", createOrder);

orderRoutes.get("/client/:id",getClientOrders)

orderRoutes.get("/:id", getOrderById);

export default orderRoutes;
