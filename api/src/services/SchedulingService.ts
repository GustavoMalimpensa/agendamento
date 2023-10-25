import { AppDataSource } from "../data-source";
import { scheduling } from "../entities/scheduling";

export const schedulingRepository = AppDataSource.getRepository(scheduling)

