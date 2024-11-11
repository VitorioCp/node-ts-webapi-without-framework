import {getFilterEp, getListEp} from './controllers/animes-controller'
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";
import * as http from "http";

//controle de rotas
export const app = async (req:http.IncomingMessage ,res: http.ServerResponse) => {

    //queryString
    const baseUrl = req.url?.split("?")[0];
    

    //listar animes
    if(req.method === HttpMethod.GET && baseUrl === Routes.List){
        await getListEp(req,res);
    }

    //filter anime
    if(req.method === HttpMethod.GET && baseUrl === Routes.Filter ){
        await getFilterEp(req, res)
    }
}