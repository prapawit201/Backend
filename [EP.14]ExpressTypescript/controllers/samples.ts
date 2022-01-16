import { Request , Response , NextFunction} from "express";
import logging from "../logging";

const NAMESPACE = "Sample Controller"
const sampleHealthCheck = (req :Request, res :Response , next :NextFunction) => {
      logging.info(NAMESPACE ,`Sample health check routes call`)

      return res.status(200).json({
            message : "Pong"
      })
}

export default {
      sampleHealthCheck
} 