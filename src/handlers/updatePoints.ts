import prisma from "../db";
import { Request, Response } from "express";

export const getUpdatePoints = async (req: Request, res: Response) => {
  const product = await prisma.product.findFirst({
    where: {
      belongsToId: req.user.id,
    },
  });

  const updatePoints = await prisma.update.findFirst({
    where: {
      productId: product.id,
    },
    include: {
      updatePoints: true,
    },
  });

  res.json({ data: updatePoints });
};

export const createUpdatePoint = async (req: Request, res: Response) => {

    const {updateId,name,description} = req.body;

    const update = await prisma.update.findFirst({
        where: {
        id: updateId,
        },
    });

  if (!update) {
    res.json({ message: "Update not found" });
  }

    const updatePoint = await prisma.updatePoint.create({
        data:{
            updateId,
            name,
            description
        }
    });

    res.json({ data: updatePoint });

};


export const getOneUpdatePoint = async (req: Request, res: Response) => {

    const updatePoint = await prisma.updatePoint.findFirst({
        where:{
            id:req.params.id
        }
    })

    res.json({data:updatePoint});

}

export const updateUpdatePoint = async (req: Request, res: Response) => {

    const {name,description} = req.body;

    const updatePoint = await prisma.updatePoint.update({
        where:{
            id:req.params.id
        },
        data:{
            name,
            description
        }
    })

    res.json({data:updatePoint});


}

export const deleteUpdatePoint = async (req: Request, res: Response) => {

        const updatePoint = await prisma.updatePoint.delete({
            where:{
                id:req.params.id
            }
        })

        res.json({data:updatePoint});
}