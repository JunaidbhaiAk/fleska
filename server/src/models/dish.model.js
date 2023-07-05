import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

export const Dish = sequelize.define(
  "Dish",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    desc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, timestamps: false }
);

export const Size = sequelize.define(
  "Size",
  {
    size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize, timestamps: false }
);

export const SpecialContent = sequelize.define(
  "SpecialContent",
  {
    name: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
    },
  },
  { sequelize, timestamps: false }
);

export const Category = sequelize.define(
  "Category",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, timestamps: false }
);

export const Menu = sequelize.define("Menu",{
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},{ sequelize, timestamps: false })

//c
Dish.hasMany(Menu);


Dish.hasMany(Category);
Dish.hasMany(Size);
Dish.hasMany(SpecialContent);
// Category.belongsToMany(Dish,{through:'Dish_Category'})
