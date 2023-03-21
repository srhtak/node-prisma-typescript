import prisma from "../db";
import { Request, Response } from "express";
import jwt from 'jsonwebtoken';


export const getProducts = async (req:Request, res:Response) => {

    const user = await prisma.user.findUnique({
        where:{
            id:req.user.id
        },
        include:{
            products:true
        }
    })

    res.json({data:user.products});
}


export const getOneProduct =async (req:Request,res:Response) => {

    const id = req.params.id;

    const product = await prisma.product.findFirst({
        where:{
            id,
            belongsToId:req.user.id
        }
    })

    res.json({data:product});
}
