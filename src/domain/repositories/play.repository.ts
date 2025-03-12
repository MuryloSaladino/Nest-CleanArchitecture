import { PlayModel } from "../models/play.model";
import { IBaseRepository } from "./base.repository";

export interface IPlaysRepository extends IBaseRepository<PlayModel> {}