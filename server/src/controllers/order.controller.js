import sequelize from "../config/db.js";
import { Dish } from "../models/dish.model.js";
import { Order, Transaction } from "../models/order.model.js";

export const createOrder = async (req, res) => {
  try {
    const { cid, orderContent } = req.body;
    const transaction = await Transaction.create({ cid });
    const orderContentwithId = orderContent.map((ele) => ({
      ...ele,
      oid: transaction.id,
    }));
    const savedOrder = await Order.bulkCreate(orderContentwithId);
    res.status(200).send(savedOrder);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Transaction.findByPk(id, {
      include: [
        {
          model: Order,
          attributes: ["qty"],
          include: [{ model: Dish, attributes: ["name", "price"] }],
        },
      ],
    });
    if (!order) res.status(404).send("No Data Found");
    else res.status(200).send(order.Orders);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getClientOrders = async (req, res) => {
  try {
    const { id } = req.params;
    const clientOrders = await Transaction.findAll({ where: { cid: id },attributes:['id',[sequelize.fn('date_format', sequelize.col('createdAt'), '%Y-%m-%d'), 'createdAt']] });
    res.status(200).send(clientOrders);
  } catch (error) {
    res.status(500).send(error);
  }
};
