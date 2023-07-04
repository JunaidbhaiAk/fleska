import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";


export const Dish = sequelize.define('Dish',{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    desc:{
        type:DataTypes.STRING,
        allowNull:false
    },
    price:{
        type:DataTypes.DECIMAL,
        allowNull:false
    },
    img:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{sequelize,timestamps:false})




export const Category = sequelize.define('Category',{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{sequelize,timestamps:false})

// export const Dish_Category = sequelize.define('Dish_Category', {}, {sequelize,timestamps: false });


Dish.hasMany(Category);
// Category.belongsToMany(Dish,{through:'Dish_Category'})