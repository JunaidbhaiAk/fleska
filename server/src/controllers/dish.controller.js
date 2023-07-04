import { Category, Dish } from "../models/dish.model.js";

export const getAllDishes = async (req, res) => {
  const { cat } = req.query;
  const where = cat === "all" ? {} : { name: cat };
  try {
    const dishes = await Dish.findAll({
      include: [{ model: Category, where, attributes: ["name"] }],
    });
    res.status(200).json(dishes);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getDishById = async (req, res) => {
  try {
    const { id } = req.params;
    const dish = await Dish.findOne({ where: { id } });
    res.status(200).json(dish);
  } catch (error) {
    res.status(500).send(error);
  }
};
