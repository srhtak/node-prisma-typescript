import jwt from 'jsonwebtoken';
import {Response,Request,NextFunction} from 'express';
import bcrypt from 'bcrypt';



export const comparePasswords = (password, hash) => {
  return bcrypt.compare(password, hash);
};

export const hashPassword = (password) => {
  return bcrypt.hash(password, 5);
};

export const createToken = ((user: any) => {
    const token = jwt.sign({
        id: user.id,
        username: user.username,
    },process.env.JWT_SECRET)
    return token;
});


export const protect = (req:Request, res:Response, next:NextFunction) => {
    const bearer = req.headers.authorization;
    if (!bearer) {
      res.status(401);
      res.send("Not authorized");
      return;
    }

    const [, token] = bearer.split(" ");
    if (!token) {
      res.status(401);
      res.send("Not authorized");
      return;
    }

    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      req.user = payload;
      next();
      return;
    } catch (e) {
      console.error(e);
      res.status(401);
      res.send("Not valid token");
      return;
    }
  };
