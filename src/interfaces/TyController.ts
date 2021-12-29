import { Response } from "express";
type TyController = Promise<void | Response<any, Record<string, any>>>;
export default TyController;
