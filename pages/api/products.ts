import type { NextApiRequest , NextApiResponse} from 'next';
import { Product } from '@/models/product-model';
import connectDB from '@/utilities/connectDB';
import { User } from '@/models/user-model';

async function handler   (req : NextApiRequest , res : NextApiResponse) {
      const {name } = req.body
      console.log("connecting to db");
 try {
      await connectDB()
      console.log("connect to db"); 
            const  products = await Product.find()
       res.status(200).json({products})
      console.log("create user completed");
 } catch (error) {
      console.log(error);
      res.status(501).json(error)
 }

}

export default handler