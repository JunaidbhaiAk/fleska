import 'dotenv/config'
import express from 'express';
import sequelize from './config/db.js';
import dishRoutes from './routes/dish.routes.js';
import orderRoutes from './routes/order.routes.js';
import cors from 'cors';
import dummyData from './dummyData.json' assert { type: "json" }
import { Category, Dish, Menu, Size, SpecialContent } from './models/dish.model.js';

const PORT = process.env.PORT || 5000;
const app = express();



const parsedDummydata = JSON.parse(JSON.stringify(dummyData))


app.use(cors());

(async () => {
  try {
    sequelize.authenticate();
    sequelize.sync({alter:true})
    await Dish.bulkCreate(parsedDummydata,{include:[Category,Size,SpecialContent,Menu]})
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();


app.use(express.json())

app.use('/dishes',dishRoutes)
app.use('/order',orderRoutes)


app.listen(PORT,() => console.log('Listing Server',PORT));






