export declare const comparePasswords: (password: any, hash: any) => any;
export declare const hashPassword: (password: any) => any;
export declare const createToken: (user: any) => any;
export declare const protect: (req: Request, res: Response, next: NextFunction) => void;
