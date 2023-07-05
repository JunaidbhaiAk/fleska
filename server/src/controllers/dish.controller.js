import { Sequelize } from "sequelize";
import { Category, Dish, Menu, Size, SpecialContent } from "../models/dish.model.js";

export const getAllDishes = async (req, res) => {
  const { cat,men } = req.query;
  const where = cat === "all" ? {} : { name: cat };
  const wherem = men === "all" ? {} : { name: men };
  console.log(req.query);
  try {
    const dishes = await Dish.findAll({
      include: [{ model: Category, where, attributes: ["name"] },{ model: Menu, where:wherem, attributes: ["name"] },{model:Size,attributes:['id','size','price']},{model:SpecialContent,attributes:['id','name','price']}],
    });
    // console.log(dishes);
    res.status(200).json(dishes);
  } catch (error) {
    res.status(500).json(error);
  }

};

export const getAllMenu = async (req,res) => {
  let now = 'Dinner';
  try{
    const data = await Dish.findAll({include:[{model:Category,where:{name:'Dinner'}},{model:Menu,attributes:['name']}]})
    res.send(data);
  }catch(error){
    console.log(error);
  } 
}

export const getDishById = async (req, res) => {
  try {
    const { id } = req.params;
    const dish = await Dish.findOne({ where: { id } });
    res.status(200).json(dish);
  } catch (error) {
    res.status(500).send(error);
  }
};
