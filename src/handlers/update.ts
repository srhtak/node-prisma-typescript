import prisma from "../db";
import { Request, Response } from "express";


export const getUpdates = async (req:Request, res:Response) => {

    const products = await prisma.product.findMany({
        where:{
            belongsToId:req.user.id
        },
        include:{
            updates:true
        }
    })

    const updates = products.reduce((allUpdates,product)=>{
        return [...allUpdates,...product.updates]
    },[])

    res.json({data:updates});
}


export const createUpdate = async (req:Request, res:Response) => {

        const product = await prisma.product.findUnique({
            where:{
                id:req.body.productId
            }
        })


        if(!product){
            res.json({message: 'Product not found'});
        }

        const update = await prisma.update.create({
            data: {
                title:req.body.title,
                body:req.body.body,
                asset: 'https://picsum.photos/200/300',
                product:{
                    connect: {
                        id: product.id
                    }
                }
            },

        })


        res.json({data:update});
}

export const getOneUpdate = async (req:Request,res:Response) => {

    const id = req.params.id;

    const update = await prisma.update.findFirst({
        where:{
            id
        }
    })

    res.json({data:update});
}

export const updateUpdate = async (req:Request, res:Response) => {

            const id = req.params.id;

            const updated = await prisma.update.update({
                where:{
                    id
                },
                data:req.body
            })

            res.json({data:updated});
}

export const deleteUpdate = async (req:Request, res:Response) => {

        const id = req.params.id;
        const deleted = await prisma.update.delete({

            where:{
                id
            }
        })

        res.json({data:deleted});
}
