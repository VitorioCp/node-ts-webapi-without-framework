import { transferAnimeModel } from "../models/anime-tranfer-model";
import { repositoryAnime } from "../repositories/animes.repository"
import { StatusCode } from "../utils/status-code";

export const serviceListEp = async():Promise<transferAnimeModel> =>{

  //define contrato
    let responseFormat:transferAnimeModel = {
    statusCode: 0,
    body: []
    };
    
    //busca dados
    const data = await repositoryAnime();

    //verifica o tipo de resposta
    responseFormat = {
    statusCode:data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
    body: data
    }

    return responseFormat
}