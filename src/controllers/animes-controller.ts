import {IncomingMessage, ServerResponse} from "http";
import {serviceListEp} from "../services/list-ep-service"
import { serviceFilterEp } from "../services/filter-ep-service";
import { ContentType } from "../utils/content-types";
import { transferAnimeModel } from "../models/anime-tranfer-model";

const DEFAULT_CONTENT= {"content-Type": ContentType.JSON}

export const getListEp = async(req: IncomingMessage, res: ServerResponse) => {
    
  const content = await serviceListEp()
  
  res.writeHead(content.statusCode, DEFAULT_CONTENT);
    
  res.end(JSON.stringify(content))
}

export const getFilterEp = async(req: IncomingMessage, res: ServerResponse) => {

  const content:transferAnimeModel = await serviceFilterEp(req.url);

  res.writeHead(content.statusCode, DEFAULT_CONTENT);
  res.end(JSON.stringify(content.body));
}
