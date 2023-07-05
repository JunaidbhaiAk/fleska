import axios from 'axios'
import { OrderReqType } from './type';

const fleskaClient = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL,
    timeout:1000,
})



export const getAllDishes = async({cat,men = 'all'}:{cat:string,men:string}) => {
    // console.log(cat,men);
    const res = await fleskaClient.get(`dishes?cat=${cat}&men=${men}`);
    if(res.status === 200) return res.data;
    else throw Error('Internal Server Error')
}

export const createOrder = async(data:OrderReqType) => {
    const res = await fleskaClient.post(`order`,data);
    if(res.status === 200) return res.data[0].oid;
    else throw Error('Internal Server Error')
}

export const getClientOrders = async(id:number) => {
    const res = await fleskaClient.get(`order/client/${id}`)
    if(res.status === 200) return res.data;
    else throw Error('Internal Server Error');
}

export const getOrderById = async(id:number) => {
    const res = await fleskaClient.get(`order/${id}`);
    if(res.status === 200) return res.data;
}