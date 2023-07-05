import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import { Dish, Size, SpecialContent } from "./dish.model.js";


export const Order = sequelize.define('Order',{
    qty:{
        type:DataTypes.INTEGER,
        allowNull:false,
    }
},{sequelize,timestamps:false})

export const Transaction = sequelize.define('Transaction',{
    cid:DataTypes.INTEGER
},{sequelize})

Transaction.hasMany(Order,{foreignKey:'oid'})
Order.belongsTo(Transaction,{foreignKey:'oid'});

Order.hasMany(Size);
Order.hasMany(SpecialContent);

Dish.hasMany(Order,{foreignKey:'dishId'});
Order.belongsTo(Dish,{foreignKey:'dishId'});
